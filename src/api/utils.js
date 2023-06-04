


// upload image in imgbb 
export const imageUpload = async image => {
    const formData = new FormData()
    formData.append('image', image)

    const url = `https://api.imgbb.com/1/upload?key=440e149d55a4ac192e42bd3f180b0898`

    const response = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await response.json()
    return data;
}