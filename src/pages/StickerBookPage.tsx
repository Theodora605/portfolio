import { useState } from "react";
import StickerBook from "../components/sticker-book/StickerBook";
import HelpModal from "../components/HelpModal";

import MoveImg from "../assets/sticker-book/move.png";
import RotateImg from "../assets/sticker-book/refresh.png";
import RemoveImg from "../assets/sticker-book/remove.png";
import UploadImg from "../assets/sticker-book/upload.png";
import SaveImg from "../assets/sticker-book/save.png";

const helpContents = (
  <div>
    <h2 className="text-[22px] font-bold text-center">Sticker Book</h2>
    <p>
      This application is a shared canvas on which stickers can be placed. To
      the right of the canvas is a menu with a tools section and a catalogue
      section. Select a sticker from the catalogue by clicking on it then click
      anywhere on the canvas to place that sticker at that location.
    </p>
    <p>The tools section contains the following items:</p>
    <table className="border-separate border-spacing-3">
      <tbody>
        <tr>
          <td>
            <div className="w-[80px] h-[80px] bg-light-brown rounded-xl p-3">
              <img className="flex justify-center items-center" src={MoveImg} />
            </div>
          </td>
          <td>
            <p className="font-bold">Move Sticker</p>
            <p>
              When selected, you can move the stickers on the canvas by clicking
              a sticker and dragging it to a new position.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="w-[80px] h-[80px] bg-light-brown rounded-xl p-5">
              <img
                className="flex justify-center items-center"
                src={RotateImg}
              />
            </div>
          </td>
          <td>
            <p className="font-bold">Rotate Sticker</p>
            <p>
              When selected, you can rotate the stickers on the canvas by
              clicking a sticker then dragging the mouse to the left or the
              right of it to rotate it in the counter-clockwise or clockwise
              direction respectively.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="w-[80px] h-[80px] bg-light-brown rounded-xl p-5">
              <img
                className="flex justify-center items-center"
                src={RemoveImg}
              />
            </div>
          </td>
          <td>
            <p className="font-bold">Remove Sticker</p>
            <p>
              When selected, you can remove stickers from the canvas by clicking
              on the a them.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="w-[80px] h-[80px] bg-light-brown rounded-xl p-2">
              <img
                className="flex justify-center items-center"
                src={UploadImg}
              />
            </div>
          </td>
          <td>
            <p className="font-bold">Upload Image</p>
            <p>
              Click to upload an image to add to the sticker catalogue. The
              image is rescaled to 80px x 80px.
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <div className="w-[80px] h-[80px] bg-light-brown rounded-xl p-4">
              <img className="flex justify-center items-center" src={SaveImg} />
            </div>
          </td>
          <td>
            <p className="font-bold">Save Canvas</p>
            <p>Click to save any changes made to the canvas.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p className="font-bold">Attributions</p>
    <ul className="text-blue-500">
      <li>
        <a href="https://www.flaticon.com/free-icons/move" title="move icons">
          Move icons created by Roundicons - Flaticon
        </a>
      </li>
      <li>
        <a
          href="https://www.flaticon.com/free-icons/warning"
          title="warning icons"
        >
          Warning icons created by Andrean Prabowo - Flaticon
        </a>
      </li>
      <li>
        <a
          href="https://www.flaticon.com/free-icons/refresh"
          title="refresh icons"
        >
          Refresh icons created by Freepik - Flaticon
        </a>
      </li>
      <li>
        <a
          href="https://www.flaticon.com/free-icons/picture"
          title="picture icons"
        >
          Picture icons created by SeyfDesigner - Flaticon
        </a>
      </li>
      <li>
        <a href="https://www.flaticon.com/free-icons/save" title="save icons">
          Save icons created by Freepik - Flaticon
        </a>
      </li>
      <li>
        <a
          href="https://www.flaticon.com/free-icons/delete"
          title="delete icons"
        >
          Delete icons created by Pixel perfect - Flaticon
        </a>
      </li>
      <li>
        <a
          href="https://www.flaticon.com/free-icons/cancel"
          title="cancel icons"
        >
          Cancel icons created by Stockio - Flaticon
        </a>
      </li>
    </ul>
  </div>
);

const StickerBookPage = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div>
      <div className="mt-5 ml-5">
        <a href="/">
          <div className="inline-block bg-light-brown p-3 rounded-[40px] border-dark-brown border-solid border-[3px] cursor-pointer mr-10">
            <p className="flex justify-center text-dark-brown font-bold text-[32px] mx-5">
              Back
            </p>
          </div>
        </a>
        <div
          className="inline-block bg-light-brown p-3 rounded-[40px] border-dark-brown border-solid  border-[3px] cursor-pointer"
          onClick={() => setShowHelp(true)}
        >
          <p className="flex justify-center text-dark-brown font-bold text-[32px] mx-5">
            Help
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-[-8px]">
        <StickerBook />
      </div>
      {showHelp && (
        <HelpModal Content={helpContents} onClose={() => setShowHelp(false)} />
      )}
    </div>
  );
};

export default StickerBookPage;
