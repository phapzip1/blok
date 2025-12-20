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
    const { opened, triggerEle, setOpened } = usePopover();
    const [rect, setRect] = React.useState<DOMRect>();
    const elementRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (triggerEle && elementRef.current && opened) {
            const resizeCallback = () => {
                setRect(() => triggerEle.getBoundingClientRect());
            }

            const scrollCallback = () => {
                setRect(() => triggerEle.getBoundingClientRect());
            }

            const clickCallback = (pe: any) => {
                const clickedOutside = !elementRef.current?.contains(pe.target);
                const clickedTrigger = triggerEle.contains(pe.target);

                if (clickedOutside && !clickedTrigger) {
                    setOpened(() => false);
                }
            }

            window.addEventListener("resize", resizeCallback);
            window.addEventListener("scroll", scrollCallback);
            window.addEventListener("mousedown", clickCallback);

            setRect(() => triggerEle.getBoundingClientRect());


            return () => {
                window.removeEventListener("resize", resizeCallback);
                window.removeEventListener("scroll", scrollCallback);
                window.removeEventListener("mousedown", clickCallback);
            }
        }
    }, [triggerEle, opened, elementRef.current]);

    const computedRect = {
        top: rect?.top || 0,
        bottom: rect?.bottom || 0,
        left: rect?.left || 0,
        right: rect?.right || 0,
        width: rect?.width || 0,
        height: rect?.height || 0,
    };


    return opened && createPortal(
        <div {...props} ref={elementRef} style={{
            top: computedRect.bottom + 2,
            right: window.innerWidth - computedRect.right,
        }} className={cn("fixed z-20 overflow-visible", className)}>
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
