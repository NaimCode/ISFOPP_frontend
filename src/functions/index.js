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

export const monthNumToString = (num) => {
  switch (num) {
    case 1:
      return "Janvier";
    case 2:
      return "Février";
    case 3:
      return "Mars";
    case 4:
      return "Avril";
    case 5:
      return "Mai";
    case 6:
      return "Juin";
    case 7:
      return "Juillet";
    case 8:
      return "Aout";
    case 9:
      return "Septembre";
    case 10:
      return "Octobre";
    case 11:
      return "Novembre";
    case 12:
      return "Décembre";
    default:
      return num
  }
};

export const sortDate=(a,b)=>{

            if(a.annee>b.annee)
              return -1
              else {
                if(a.annee<b.annee)
                return 1
                else
                 {
                    if(a.mois>b.mois)
              return -1
              else {
                if(a.mois<b.mois)
                return 1
                else
                 {
                    if(a.jours>b.jours)
              return -1
              else {
                if(a.jours<b.jours)
                return 1
                else
                 {
                   return 0
                 }
                
              }
            
                 }
                
              }
            
                 }
                
              }
            
          
}