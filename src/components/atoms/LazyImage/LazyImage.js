import React, { useState, useEffect } from "react";
import styled from "styled-components";
import placeHolder from "../../../resources/images/placeholder.png";

const Image = styled.img`
  height: 100%;
  width: 100%;
  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  // I use utilitary classes instead of props to avoid style regenerating
  &.loaded {
    animation: loaded 500ms ease-in-out;
  }
`;

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState();
  const [imageRef, setImageRef] = useState();

  // Triggered when image is loaded
  const onLoad = (event) => {
    event.target.classList.add("loaded");
  };

  // Triggered when the image is not loaded correctly
  const onError = (event) => {
    setImageSrc(placeHolder);
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "75%",
          }
        );
        observer.observe(imageRef);
      } else {
        // Old browsers fallback
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      // on component cleanup, we remove the listner
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <Image
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
    />
  );
};
export default React.memo(LazyImage);
