import { appMediaUrl, blobStorageUrl } from "./paths"

export const validateEmail = (input) => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    return regEx.test(input)
}

export const validateTextInput = (input, min, max) => {
    const regEx=/^[a-zA-Z][a-zA-Z\\s-]+[a-zA-Z]$/;
    if(input.length<min || input.length>max) return false
    return regEx.test(input); 
}

export const validatePhone = (input) => {
    const regEx=/^([+]\d{2})? \d{10}$/;
    return regEx.test(input);
}

export const formatPhone = (i) => {
    
}

export const getEventThumbnail = (uri, media, type) => {
    let fullSize = '/assets/images/placeholder-thumbnail.gif'
    if(uri){
        if(media[type].Saver === 'BlobStorage'){
            fullSize = blobStorageUrl+media[type].Variations.FullSize.Asset.Reference
        }
        else{
            let path = media[type].Variations.FullSize.Asset.DateStamp.replaceAll('-','').split('T')[0]
            fullSize = appMediaUrl
            +'Content/eventImages/'
            +path
            +'/'
            +media[type].Variations.FullSize.Asset.Reference
        }
    }
    return fullSize
}

export const getLotThumbnail = (media) => {
    let thumbnail = '/assets/images/placeholder-thumbnail.gif'
    if(media.length > 0){
        if(media[0].Saver === 'BlobStorage'){
            thumbnail = blobStorageUrl+media[0].Variations.FullSize.Asset.Reference
        }
        else
        {
            thumbnail = appMediaUrl
            +'Content/listingImages/'
            +media[0].Variations.FullSize.Asset.DateStamp.replaceAll('-','').split('T')[0]
            +'/'+media[0].Variations.FullSize.Asset.Reference
        }
    }
    return thumbnail
}





