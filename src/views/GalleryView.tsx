import { FC } from 'react';

export const GalleryView: FC = () => {
    const images = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Medieval_town.png/640px-Medieval_town.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/A_New_Path_in_a_16-bit_Forest.tif/lossy-page1-640px-A_New_Path_in_a_16-bit_Forest.tif.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sanfran-night.jpg/640px-Sanfran-night.jpg'
        // add more image URLs here
    ];
    return (
        <div className="carousel rounded-box w-125">
            {images.map((image, index) => (
                <div key={index} className="carousel-item w-1/2">
                    <img src={image} alt={`Gallery image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};