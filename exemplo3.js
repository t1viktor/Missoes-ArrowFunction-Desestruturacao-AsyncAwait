// função que retorna uma promise simulando uma operação assíncrona
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        resolve(data);
      }, 2000);
    });
  }
  
//usando a Promise
  fetchDataWithPromise()
    .then(data => {
      console.log("Dados recebidos (Promise):", data);
    })
    .catch(error => {
      console.error("Erro (Promise):", error);
    });
 
//////////////////////////////////////////////////////////////////////////////////////////////////////    
    
// função assíncrona usando async/await
async function fetchDataWithAsync() {
    try {
      const data = await fetchDataWithPromise();
      console.log("Dados recebidos (async/await):", data);
    } catch (error) {
      console.error("Erro (async/await):", error);
    }
  }

  fetchDataWithAsync();