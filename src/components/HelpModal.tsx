import { useEffect } from "react";

interface HelpModalProps {
  onClose: () => void;
  Content: JSX.Element;
}

const HelpModal = ({ Content, onClose }: HelpModalProps) => {
  useEffect(() => {
    const mouseClickedListener: EventListener = (e: MouseEventInit) => {
      const rect = document.getElementById("modal")?.getBoundingClientRect();

      if (
        rect === undefined ||
        e.clientX === undefined ||
        e.clientY === undefined
      ) {
        return;
      }

      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY > rect.bottom ||
        e.clientY < rect.top
      ) {
        onClose();
      }
    };

    window.addEventListener("mousedown", mouseClickedListener);

    return () => window.removeEventListener("mousedown", mouseClickedListener);
  });

  return (
    <div className="min-w-full min-h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black bg-opacity-30">
      <div
        id="modal"
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] bg-opacity-100"
      >
        <div className="w-[1000px] h-[600px] bg-amber-100 border-solid border-dark-brown border-[3px] rounded-2xl p-6">
          <div className="h-[85%] w-[100%] border-dark-brown border-solid border-[1px] p-3 rounded-2xl">
            <div className="h-[100%] w-[100%] overflow-y-auto">{Content}</div>
          </div>
          <div className="flex w-[100%] items-end justify-center gap-x-24 mt-7">
            <div
              className="inline-flex bg-light-brown text-black p-3 px-7 cursor-pointer font-bold rounded-xl border-solid border-black border-[3px]"
              onClick={onClose}
            >
              <p className="self-center">Close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
