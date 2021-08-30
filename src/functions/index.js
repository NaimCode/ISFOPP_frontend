import { API } from "../env";

export const objectIsEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
export const getImageFromApi = (image, type) => {
  const img = image[0] ?? image;

  if (img.url.indexOf("/") === 0) {
    switch (type) {
      case "large":
        return `${API}${img.formats.large.url}`;
      case "medium":
        return `${API}${img.formats.medium.url}`;
      case "small":
        return `${API}${img.formats.small.url}`;
      case "thumbnail":
        return `${API}${img.formats.thumbnail.url}`;

      default:
        return `${API}${img.url}`;
    }
  }
  switch (type) {
    case "large":
      return `${API}/${img.formats.large.url}`;
    case "medium":
      return `${API}/${img.formats.medium.url}`;
    case "small":
      return `${API}/${img.formats.small.url}`;
    case "thumbnail":
      return `${API}/${img.formats.thumbnail.url}`;

    default:
      return `${API}/${img.url}`;
  }
};
