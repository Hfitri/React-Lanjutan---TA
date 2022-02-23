const getGitHubUser = (username) => {
    return null;
   {
        if (Object === username){
        return Object
        } else {
            return ('not found')
        }
    };

const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

fetch("https://api.github.com/users/defunkt")
.then ((Response) => Response.json())
    .then ((result) => {
        console.log(result);
    })
}


  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();