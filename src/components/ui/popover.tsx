import { cn } from "@/lib/utils";
import React from "react";
import { createPortal } from "react-dom";

interface PopoverProps {
    opened?: boolean;
    children?: React.ReactNode;
}

interface PopoverContextStateProps {
    opened: boolean;
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    triggerEle?: HTMLButtonElement;
    setTriggerEle: React.Dispatch<React.SetStateAction<HTMLButtonElement | undefined>>;
}

const PopoverContext = React.createContext<PopoverContextStateProps | undefined>(undefined);

const usePopover = () => {
    const ctx = React.useContext(PopoverContext);

    if (ctx === undefined) {
        throw new Error("usePopover must be used within Popover");
    }

    return ctx!;
}

const Popover: React.FC<PopoverProps> = ({ opened = false, children }) => {
    const [isOpened, setOpened] = React.useState<boolean>(opened);
    const [triggerEle, setTriggerEle] = React.useState<HTMLButtonElement | undefined>();

    return (
        <PopoverContext.Provider value={{
            opened: isOpened,
            setOpened: setOpened,
            triggerEle,
            setTriggerEle,
        }}>
            {children}
        </PopoverContext.Provider>
    );
}

const PopoverContent: React.FC<React.ComponentPropsWithRef<"div">> = ({ children, className, ...props }) => {
    const { opened, triggerEle } = usePopover();
    const [rect, setRect] = React.useState<DOMRect>();

    React.useEffect(() => {
        if (triggerEle) {
            const observer = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    setRect(() => entry.target.getBoundingClientRect());
                    break;
                }
            });

            observer.observe(triggerEle);

            return () => observer.disconnect();
        }
    }, [triggerEle]);

    return opened && createPortal(
        <div {...props} style={{
            top: rect?.bottom || 0,
            left: rect?.left || 0,
        }} className={cn("fixed z-20")}>
            {children}
        </div>,
        document.getElementById("portal") || document.body,
    );
}

const PopoverTrigger: React.FC<React.ComponentProps<"button">> = ({ ...props }) => {
    const { setOpened, setTriggerEle } = usePopover();
    const triggerRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
        if (triggerRef.current) {
            setTriggerEle(() => triggerRef.current!);
        }
    }, [triggerRef.current]);

    return (
        <button {...props} ref={triggerRef} onClick={() => setOpened(prev => !prev)}>
        </button>
    );
}

export {
    Popover,
    PopoverContent,
    PopoverTrigger,
}
