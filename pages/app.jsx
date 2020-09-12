/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import {
  Stage, Layer, Rect,
} from 'react-konva';
import Range from '@atlaskit/range';
import useCanvasSize from '../utils/useCanvasSize';
import Logo from '../components/logo';
import URLImage from '../components/app/URLImage';
import DraggableIcon from '../components/app/DraggableIcon';
import DraggableImage from '../components/app/DraggableImage';

export default function credits() {
  const [canvasWidth, canvasHeight] = useCanvasSize();

  const dragUrl = useRef();
  const stageRef = useRef();
  const [images, setImages] = useState([]);
  const [selectedId, selectImage] = React.useState(null);
  const [customImageURL, setCustomImageURL] = useState(null);

  // controls
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleContextMenu = (e) => {
    e.evt.preventDefault();
    // deselect img on right click
    selectImage(null);
  };

  const checkDeselect = (e) => {
    // deselect when clicked on empty area(rect)
    if (e.target.getAttrs().checkRect) {
      selectImage(null);
    }
  };

  const handleScale = (value) => {
    setScale(value);
    const newState = [];
    images.forEach((img) => {
      if (img.id === selectedId) {
        newState.push({
          ...img,
          scaleX: +value,
          scaleY: +value,
        });
      } else {
        newState.push(img);
      }
    });
    setImages(newState);
  };

  const handleRotate = (value) => {
    setRotation(value);
    const newState = [];
    images.forEach((img) => {
      if (img.id === selectedId) {
        newState.push({
          ...img,
          rotation: +value,
        });
      } else {
        newState.push(img);
      }
    });
    setImages(newState);
  };
  const handleOpacity = (value) => {
    setOpacity(value);
    const newState = [];
    images.forEach((img) => {
      if (img.id === selectedId) {
        newState.push({
          ...img,
          opacity: +value,
        });
      } else {
        newState.push(img);
      }
    });
    setImages(newState);
  };

  const openImage = (e) => {
    // accessing the first Image and coverting it into src URL

    setCustomImageURL(URL.createObjectURL(e.target.files[0]));
  };

  function downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const saveImage = () => {
    // prevent the transformer to appear on the image
    selectImage(null);

    // hacks to at least behave like async
    // there are better ways to do it
    setTimeout(() => {
      downloadURI(stageRef.current.toDataURL({ pixelRatio: 2 }), `GR_HB_4_${new Date().getTime()}.png`);
    }, 400);
  };

  const handleOnDragStart = (e) => {
    if (e.type === 'click') {
      setImages(
        images.concat([
          {
            x: canvasWidth / 2,
            y: canvasHeight / 2,
            src: e.target.src,
            id: images.length,
            scaleX: 1,
            scaleY: 1,
            rotation: 0,
            opacity: 1,
          },
        ]),
      );
    } else {
      dragUrl.current = e.target.src;
    }
  };
  return (
    <div className="bg-gray-100 flex flex-col md:min-h-screen">
      <div className="bg-gray-800 border-b-2 flex items-center justify-between px-2 py-3">
        <Link href="/">
          <a href="/">
            <div className="bg-gray-200 md:ml-5 rounded-full px-5 py-1 inline-block font-medium">
              Home
            </div>
          </a>
        </Link>
        <div className="hidden md:block">
          <Logo />
        </div>
        <button type="button" onClick={saveImage} className="bg-blue-brand text-white md:mr-5 rounded-full px-5 py-1 inline-block font-medium">
          Save
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center py-6">
        <div
          onDrop={(e) => {
            // register event position
            stageRef.current.setPointersPositions(e);
            // add image
            setImages(
              images.concat([
                {
                  ...stageRef.current.getPointerPosition(),
                  src: dragUrl.current,
                  id: images.length,
                  scaleX: 1,
                  scaleY: 1,
                  rotation: 0,
                  opacity: 1,
                },
              ]),
            );
          }}
          onDragOver={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="h-full md:w-20 flex md:flex-col items-center justify-center">
            <DraggableIcon
              src="golden_rect.svg"
              alt="Golden Rectangle"
              onDragStart={handleOnDragStart}
            />
            <DraggableIcon
              src="golden_spiral.svg"
              alt="Golden Spiral"
              onDragStart={handleOnDragStart}
            />
            <DraggableIcon
              src="golden_spiral_diagonal.svg"
              alt="Golden Spiral"
              onDragStart={handleOnDragStart}
            />
            <DraggableIcon
              src="pentagram.svg"
              alt="Pentagram"
              onDragStart={handleOnDragStart}
            />
            <DraggableIcon
              src="phi_grid.svg"
              alt="Phi Grid"
              onDragStart={handleOnDragStart}
            />
            <DraggableIcon
              src="rule_of_third.svg"
              alt="Rule of third"
              onDragStart={handleOnDragStart}
            />
            <DraggableIcon
              src="triangle.svg"
              alt="Triangular Rectangle"
              onDragStart={handleOnDragStart}
            />
          </div>
          <Stage
            className="shadow"
            width={canvasWidth}
            height={canvasHeight}
            ref={stageRef}
            onClick={checkDeselect}
            onContextMenu={handleContextMenu}
          >
            <Layer>
              <Rect
                x={0}
                y={0}
                width={canvasWidth}
                height={canvasHeight}
                fill="white"
                checkRect
              />
            </Layer>
            <Layer>
              {images.map((image, i) => (
                <URLImage
                  image={image}
                  key={image.id}
                  isSelected={image.id === selectedId}
                  onSelect={() => {
                    selectImage(image.id);
                    setScale(image.scaleX);
                    setOpacity(image.opacity);
                    setRotation(image.rotation);
                  }}
                  onChange={(newAttrs) => {
                    const imgs = images.slice();
                    imgs[i] = newAttrs;
                    setImages(imgs);
                  }}
                />
              ))}
            </Layer>
          </Stage>
        </div>
        <div className="bg-white shadow-sm sm:w-full md:w-1/2 mx-4 my-3 md:my-0 md:mx-2 p-2">
          <div className="text-center flex bg-gray-100 cursor-pointer">
            <label
              className="p-2 border-2 border-dashed w-full"
              htmlFor="custom_image"
            >
              Add Image to Canvas
            </label>
            <input
              className="opacity-0 w-0"
              type="file"
              id="custom_image"
              name="custom_image"
              accept=".jpg, .jpeg, .png"
              onChange={openImage}
            />
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">

            {customImageURL === null ? (
              null
            ) : <DraggableImage src={customImageURL} onDragStart={handleOnDragStart} alt="Custom Image" />}

            <DraggableImage src="./assets/Art/the_last_supper.jpg" onDragStart={handleOnDragStart} alt="Golden Ratio" />
            <DraggableImage src="./assets/Art/raphael-room-murals-including-school-athens.jpg" onDragStart={handleOnDragStart} alt="Golden Ratio" />
            <DraggableImage src="./assets/Art/adam_michelangelo.jpg" onDragStart={handleOnDragStart} alt="Golden Ratio" />
            <DraggableImage src="./assets/Art/Michelangelo_Noah_Sacrifice.jpg" onDragStart={handleOnDragStart} alt="Golden Ratio" />
            <DraggableImage src="./assets/Art/Sistine-Chapel-creation-of-eve.png" onDragStart={handleOnDragStart} alt="Golden Ratio" />
            <DraggableImage src="./assets/Art/sistine-chapel-noah-golden-rectangle.png" onDragStart={handleOnDragStart} alt="Golden Ratio" />
            <DraggableImage src="./assets/Nature/02.jpg" onDragStart={handleOnDragStart} alt="Golden Ratio" />
            <DraggableImage src="./assets/Nature/05.jpg" onDragStart={handleOnDragStart} alt="Golden Ratio" />
            <DraggableImage src="./assets/Nature/06.jpg" onDragStart={handleOnDragStart} alt="Golden Ratio" />
            <DraggableImage src="./assets/Nature/01.jpg" onDragStart={handleOnDragStart} alt="Golden Ratio" />
          </div>
        </div>
        <div className="bg-white sm:w-full md:w-1/2 shadow-sm mx-4 my-3 md:my-0 md:ml-2 p-2">
          {selectedId !== null ? (
            <>
              <div className="flex flex-col font-medium text-base text-neutral">
                <div className="flex justify-between items-center font-medium text-base text-neutral">
                  <p>Scale</p>
                </div>
                <div className="flex items-center">
                  <Range
                    min={0}
                    max={3}
                    step={0.01}
                    value={scale}
                    onChange={handleScale}
                  />
                  <span className="w-16 text-right">
                    { scale }
                    x
                  </span>
                </div>
              </div>
              <div className="flex flex-col font-medium text-base text-neutral">
                <div className="flex justify-between items-center font-medium text-base text-neutral">
                  <p>Rotate</p>
                </div>
                <div className="flex items-center">
                  <Range
                    min={0}
                    max={360}
                    step={15}
                    value={rotation}
                    onChange={handleRotate}
                  />
                  <span className="w-16 text-right">
                    { rotation }
                    <sup> &deg; </sup>
                  </span>
                </div>
              </div>
              <div className="flex flex-col font-medium text-base text-neutral">
                <div className="flex justify-between items-center font-medium text-base text-neutral">
                  <p>Opacity</p>
                </div>
                <div className="flex items-center">
                  <Range
                    min={0}
                    max={1}
                    step={0.01}
                    value={opacity}
                    onChange={handleOpacity}
                  />
                  <span className="w-16 text-right">
                    { Math.round(opacity * 100) }
                    %
                  </span>
                </div>
              </div>
              <hr className="my-4" />
              <span className="flex w-full rounded-md shadow-sm mb-4">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  onClick={() => {
                    setImages(images.filter((img) => img.id !== selectedId));
                    selectImage(null);
                  }}
                >
                  Delete
                </button>
              </span>
            </>
          )
            : (
              <div className="flex flex-col items-center justify-center px-4">
                <img src="./icons/edit_img.png" alt="Information" />
                <h2 className="font-semibold text-xl">Instructions</h2>
                <p className="mb-3 mt-3 text-sm">
                  Click or drag the image or the icon to add it to the canvas.
                </p>
                <p className="mb-3 text-sm">
                  Once added, click on the image on the canvas to get more options.
                </p>
                <p className="mb-3 text-sm">
                  To deselect click, anywhere on canvas other then the image.
                </p>
                <p className="mb-3 text-sm">
                  Try adding your own images and find golden ratio in them.
                </p>
                <p className="mb-3 text-sm">
                  Now that you have edited your image, try to save it.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
