//chanlenge 2
const job = (state) => new Promise((resolve, reject) => {
    if (state) {
      resolve('resolved');
    } else {
      reject('rejected');
    }
  });
  
  job(true)
    .then((data) => {
      console.log(data);
      return job(true);
    })
    .then((data) => {
      if (data !== 'ok') {
        throw 'release the kraken';
      }
  
      return job(true);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
      return job(false);
    })
    .then((data) => {
      console.log(data);
      return job(true);
    })
    .catch((error) => {
      console.log(error);
      return 'error caught';
    })
    .then((data) => {
      console.log(data);
      return new Error('all your base are belong to us');
    })
    .then((data) => {
      console.log('success:', data.message);
    })
    .catch((data) => {
      console.log('error:', data.message);
    });


//output should be
// resolved
// release the kraken
// rejected
// error caught
// 'success': your base are belong to us