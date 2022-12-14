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
        let context = type === 0 ? 'UploadEventImage': 'UploadEventBanner'
        let mediaObj = media.filter(i=> i.context === context)[0]
        if(mediaObj.saver === 'BlobStorage'){
            fullSize = blobStorageUrl+mediaObj.variations.FullSize.asset.reference
        }
        else{
           // let defaultVariation = media[type].Variations[file.DefaultVariationName]
            let path = mediaObj.variations.FullSize.asset.dateStamp.replaceAll('-','').split('T')[0]
            fullSize = appMediaUrl
            +'Content/eventImages/'
            +path
            +'/'
            +mediaObj.variations.FullSize.asset.reference
        }
    }
    return fullSize
}

export const getLotThumbnail = (media) => {
    let thumbnail = '/assets/images/placeholder-thumbnail.gif'
    if(media.length > 0){
        let mediaObj = media.filter(i=> i.context === 'UploadListingImage')[0]
        if(mediaObj.saver === 'BlobStorage'){
            thumbnail = blobStorageUrl+media[0].variations.FullSize.asset.reference
        }
        else
        {
            thumbnail = appMediaUrl
            +'Content/listingImages/'
            +mediaObj.variations.FullSize.asset.dateStamp.replaceAll('-','').split('T')[0]
            +'/'+mediaObj.variations.FullSize.asset.reference
        }
    }
    return thumbnail
}

export const getTimeLeft = (endDate) => {
    const timestamp = Date.parse(endDate)-Date.now()
    var diff = Math.floor(timestamp/86400000)
    if(diff>=1) return `${diff} days left`
    else {
        diff = Math.floor(timestamp/3600000)
        if(diff>=1) return `${diff} hours left`
        else {
            diff = Math.floor(((timestamp%86400000)%3600000)/6000)
            return `${diff} mins left`
        }
    }
}





