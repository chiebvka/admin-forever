import { FC } from "react";
import { v4 } from "uuid";
import GalleryImageItem from "./gallery-image-item";
import GalleryImageTableEmpty from "./gallery-image-table-empty";

interface GalleryImageTableProps {
  postId: string;
  fileNames: string[];
  imageUrls: string[];
}

const GalleryImageTable: FC<GalleryImageTableProps> = ({

  postId,
  fileNames,
  imageUrls,
}) => {
  return (
    <div className="inline-block max-w-2xl rounded-lg border border-gray-200 p-5 align-middle">
      <div className="min-w-full divide-y divide-gray-300">
        <div className="space-y-5 bg-white">
          {imageUrls.map((url, idx) => (
            <GalleryImageItem
              key={v4()}
              postId={postId}
              fileName={fileNames[idx]}
              imageUrl={url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryImageTable;
