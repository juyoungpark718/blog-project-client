export default class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload = () => {
    //"data:image/png;base64,"+ btoa(binaryString)
    return this.readThis(this.loader.file);
  };

  readThis = async file => {
    const result = await file
      .then(value => {
        let imagePromise = new Promise((resolve, reject) => {
          var myReader = new FileReader();
          myReader.onloadend = e => {
            let image = myReader.result;
            resolve({ default: image });
          };
          myReader.readAsDataURL(value);
        });
        return imagePromise;
      })
      .then(res => {
        this.defaultValue = res;
      });
    return this.defaultValue;
  };
}
