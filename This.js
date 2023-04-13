
let photoSlideShow = {
    photoList: ['Photo1', 'Photo2', 'Photo3'],
    currentPhotoIndex: 0,
    nextPhoto(){
        if(this.photoList.length > this.currentPhotoIndex+1){
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex])
        } else{
            console.log('End of slideshow')
        }
    },
    prevPhoto(){
        if(this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex])
        }
    },
    getCurrentPhoto(){
        console.log(this.photoList[this.currentPhotoIndex])
    }
}

photoSlideShow.getCurrentPhoto(); //Photo1
photoSlideShow.nextPhoto(); //Photo2
photoSlideShow.nextPhoto(); //Photo3
photoSlideShow.prevPhoto(); //Photo2