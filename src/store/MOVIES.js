export const compareTwoArrays = (arr1, arr2) => {
    return arr2.every((value) => arr1.includes(value));
};

//prettier-ignore
export const movieList = [
    {
        id: "tt0093822",
        name: "Rising Arizona",
        genre: ["Comedy", "Crime"],
        poster:"https://m.media-amazon.com/images/M/MV5BOGUwZTEwZTYtZmQ0OS00NmM1LWE2ZTQtNjZiYmE4ZmUxMjk1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" ,
    },
    {
        id: "tt0332452",
        name: "Troy",
        genre: ["Drama", "History"],
        poster:"https://www.google.com/search?q=troy&rlz=1C1GCEA_enRS982RS982&sxsrf=AOaemvJGluvsC-l10Bj3UVXBr3A5P_HsKw:1638539325849&tbm=isch&source=iu&ictx=1&fir=L467Cuw1gJr5KM%252CMuimAWKOrdxauM%252C%252Fm%252F01vw8k%253B2EcXFHHwnC0jjM%252CerWJWK99oe78fM%252C_%253BQfTCrxDxu-8pRM%252C48HO_ko48qGUpM%252C_%253BQD_gx5jDkh2rJM%252CC5aCWaXdPRsQCM%252C_%253BGfWVY29oJrrERM%252CQbhuRH9LHqJPFM%252C_%253B0TwwHP9O1hfJeM%252CecQ2xOnISafubM%252C_%253B1P6Ga4qM-eMg-M%252C3wtzHnscBIvSgM%252C_%253BxkUmfJ8u_yiBPM%252CeNJzDIZ4rpMiNM%252C_&vet=1&usg=AI4_-kTp2oPEiYYLjSHBZvZlG0X4s59i3w&sa=X&ved=2ahUKEwirp97T4sf0AhX1g_0HHWkeCo8Q_B16BAhgEAE#imgrc=2EcXFHHwnC0jjM" ,
        
    },
    {
        id: "tt0118715",
        name: "The Big Lebowski",
        poster: "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_.jpg"
     
    },
    {
        id: "tt0190590",
        name: "O Brother, Where Art Thou?",
        poster: "https://www.google.com/search?q=O+Brother,+Where+Art+Thou%3F&rlz=1C1GCEA_enRS982RS982&sxsrf=AOaemvICgVAf1_jdV9N9e5yNdgDK1Par9Q:1638540261047&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjVmNaR5sf0AhWY57sIHSxdBWgQ_AUoAXoECAEQAw#imgrc=rRDEZnq00gjAyM"
        
    },
    {
        id: "tt5726616",
        name: "Call Me by Your Name",
        poster: "https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_.jpg"
    },
    {
        id: "tt12838766",
        name: "SPACE SWEEPERS",
        poster: "https://m.media-amazon.com/images/M/MV5BZTUxN2M3ZWYtMzc1MC00NTc4LWFhZDItMzViZDg2NmFjMzBhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
     
    },
    {
        id: "tt9770150",
        name: "Nomadland",
        poster: "https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
        id: "tt0094625",
        name: "Akira",      
        poster: "https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_FMjpg_UX1000_.jpg"
        
    },
    {
        id: "tt0258463",
        name: "The Bourne Identity",
        poster: "https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
        
    },
    {
        id: "tt6475714",
        name: "Monster Hunter",
        poster: "https://m.media-amazon.com/images/M/MV5BOGU3NTFmNjYtODc3Ny00MWEzLWI3M2ItZjE3NDgwMTI0MzkzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
    
    },
    {
        id: "tt0372183",
        name: "The Bourne Supremacy",
        poster: "https://m.media-amazon.com/images/M/MV5BYTIyMDFmMmItMWQzYy00MjBiLTg2M2UtM2JiNDRhOWE4NjBhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        
    },
    {
        id: "tt5198068",
        name: "Wolfwalkers",
        poster: "https://m.media-amazon.com/images/M/MV5BNTA4MWQ4NGUtOGQ0MS00M2QyLWE5MDItZWM2YzA0ZDgxZTA2XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"

    },
    {
        id: "/tt0974015",
        name: "Justice League",
        poster: "https://images-na.ssl-images-amazon.com/images/I/81KX513BQxL.jpg"
      
    },
    {
        id: "tt4975722",
        name: "Moonlight",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_FMjpg_UX1000_.jpg"
      
    },
    {
        id: "tt2395427",
        name: "Avengers: Age of Ultron",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg"
      
    },
    {
        id: "tt9620292",
        name: "Promising Young Woman",
        poster: "https://m.media-amazon.com/images/M/MV5BOTgzMzE4MGItZDgxYS00ZGEwLWE3YTctZWY3ZDAyMTk0ZGU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg"
     
    },
    {
        id: "tt0172495",
        name: "Gladiator",
        poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
        id: "tt5363618",
        name: "Sound of Metal",
        poster: "https://m.media-amazon.com/images/M/MV5BNjcyYjg0M2ItMzMyZS00NmM1LTlhZDMtN2MxN2RhNWY4YTkwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg"
    
    },
    {
        id: "tt5034838",
        name: "Godzilla vs Kong",
        poster: "https://m.media-amazon.com/images/M/MV5BMzk2ZmYxNTUtODlhMi00NzE2LTkwMTctYjg0ODQ1ZjkyNzJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
        
    },
    {
        id: "tt3498820",
        name: "Captain America: Civil War",
        poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg"
   
    },
    {
        id: "tt10288566",
        name: "Another Round",
        poster: "https://m.media-amazon.com/images/M/MV5BOTNjM2Y2ZjgtMDc5NS00MDQ1LTgyNGYtYzYwMTAyNWQwYTMyXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_.jpg"

    },
    {
        id: "tt10633456",
        name: "Minari",
        poster: "https://images-na.ssl-images-amazon.com/images/I/91Jf7iEaGnL._RI_.jpg"
   
    },
    {
        id: "tt0177789",
        name: "Galaxy Quest",
        poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRSu9zspfkoUELt724TQ1806fuMfdEzwkW8L74WWue47OOa5fTU"
     
    },
    {
        id: "tt0090728",
        name: "Big Trouble in Little China",
        poster: "https://m.media-amazon.com/images/M/MV5BNzlhYjEzOGItN2MwNS00ODRiLWE5OTItYThiNmJlMTdmMzgxXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
        
    },
    {
        id: "tt0293429",
        name: "Mortal Kombat",
        poster: "https://wallpapercave.com/wp/wp8592034.png"

    },
    {
        id: "tt0120601",
        name: "Being John Malkovich",
        poster: "https://flxt.tmsimg.com/assets/p23903_p_v10_aa.jpg"

    },
    {
        id: "t0077651",
        name: "Halloween",
        poster: "https://m.media-amazon.com/images/M/MV5BZTA0YmE2YWUtYjdjMS00YTcxLTkyZmYtZDY2NGEyZTBkZWJhXkEyXkFqcGdeQXVyMjgyNDU4MjE@._V1_.jpg"
 
    },
    {
        id: "tt7979580",
        name: "The Mitchells vs the Machines",
        poster: "https://m.media-amazon.com/images/M/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_.jpg"
     
    },
    {
        id: "tt0074156",
        name: "Assault on Precinct 13",
        poster: "https://m.media-amazon.com/images/M/MV5BZTQzMTA2ZjItMDA2Mi00YTNjLWFkOTktYTk3Y2JhZTdiYzU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
     
    },
    {
        id: "tt0084787",
        name: "The Thing",
        poster: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg"

    },
    {
        id: "tt1109624",
        name: "Paddington",
        poster: "https://m.media-amazon.com/images/I/81PjZQdZJbL._SL1500_.jpg"

    },
    {
        id: "tt4468740",
        name: "Paddington 2",
        poster: "https://m.media-amazon.com/images/M/MV5BMmYwNWZlNzEtNjE4Zi00NzQ4LWI2YmUtOWZhNzZhZDYyNmVmXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_FMjpg_UX1000_.jpg"

    },
    {
        id: "tt0116225",
        name: "Escape from L.A.",
        poster: "https://m.media-amazon.com/images/M/MV5BOWUzNTRmNTQtNWMwZS00MTg4LThhMDUtYmQ5OGQ5MmNmYzNmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"

    },
    {
        id: "tt2837574",
        name: "The Old Man & the Gun",
        poster: "https://m.media-amazon.com/images/M/MV5BOTk3NjU5MjIxM15BMl5BanBnXkFtZTgwNjU0OTU2NTM@._V1_.jpg"
     
    },
    
    {
        id: "tt12801262",
        name: "Luca",
        poster: "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "tt1232829",
        name: "21 Jump Street",
        poster: "https://m.media-amazon.com/images/M/MV5BNTZjNzRjMTMtZDMzNy00Y2ZjLTg0OTAtZjVhNzYyZmJjOTljXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
    },
    {
        id: "tt2294449",
        name: "22 Jump Street",
        poster: "https://m.media-amazon.com/images/M/MV5BMTcwNzAxMDU1M15BMl5BanBnXkFtZTgwNDE2NTU1MTE@._V1_FMjpg_UX1000_.jpg"
   
    },
    {
        id: "tt3480822",
        name: "Black Widow",
        poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
    },
    {
        id: "tt7784604",
        name: "Hereditary",
        poster: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg"
     
    },
    {
        id: "tt8772262",
        name: "Midsommar",
        poster: "https://m.media-amazon.com/images/M/MV5BMDZjZWE0ZjktZjBlOS00YmFiLWFlYjctY2IwZmUxMzQyZjUyXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg"
        
    },
    {
        id: "tt0311113",
        name: "Master and Commander: The Far Side of the World",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA5NjYyMDM5NV5BMl5BanBnXkFtZTYwOTU5MDY2._V1_FMjpg_UX1000_.jpg"
      
    },
    {
        id: "tt1396484",
        name: "It",
        poster: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg"
 
    },
    {
        id: "tt7014006",
        name: "Eighth Grade",
        poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuXj6kJxHy5kYjKkXjqsUKjQ5YtuJ1x4ymW4cJ5FPZGOAVYPW3"
      
    },
    {
        id: "tt10514222",
        name: "Ma Rainey's Black Bottom",
        poster: "https://m.media-amazon.com/images/M/MV5BNTBlZGY1OTAtN2RjMC00ZThiLWFiZmUtN2VkOGMxNmMyYjQwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
    },
    {
        id: "tt0335266",
        name: "Lost in Translation",
        poster: "https://cdn.shopify.com/s/files/1/1057/4964/products/Lost-In-Translation-Vintage-Movie-Poster-Original-1-Sheet-27x41_5fa2337c-80f6-490d-9aee-68f218ef1349_1934x.jpg?v=1632603628"
    },
    {
        id: "tt11083552",
        name: "Wrath of Man",
        poster: "https://m.media-amazon.com/images/M/MV5BYTA3MTdiOGMtY2EwNC00OTljLTg1YWItNmNkNDNlOThkOTFmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
        
    },
    {
        id: "tt12361974",
        name: "Zack Snyder's Justice League",
        poster: "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"

    },
    {
        id: "tt6334354",
        name: "The Suicide Squad",
        poster: "https://m.media-amazon.com/images/M/MV5BNGM3YzdlOWYtNjViZS00MTE2LWE1MWUtZmE2ZTcxZjcyMmU3XkEyXkFqcGdeQXVyODEyMTI1MjA@._V1_.jpg"
     
    },
    {
        id: "tt0062622",
        name: "2001: A Space Odyssey",
        poster: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        id: "tt9243804",
        name: "The Green Knight",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMxNTdiNWMtOWY0My00MjM4LTkwNzMtOGI0YThhN2Q4M2I4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
      
    },
    {
        id: "tt3741834",
        name: "Lion",
        poster: "https://adoptionsupport.org/wp-content/uploads/2017/01/Lion-movie-image.png"
       
    },
    {
        id: "tt1568346",
        name: "The Girl with the Dragon Tattoo",
        poster: "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_.jpg"
   
    },
    {
        id: "tt0081505",
        name: "The Shining",
        poster: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
   
    },
    {
        id: "tt0072684",
        name: "Barry Lyndon",
        poster: "https://m.media-amazon.com/images/M/MV5BNmY0MWY2NDctZDdmMi00MjA1LTk0ZTQtZDMyZTQ1NTNlYzVjXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg"
    
    },
    {
        id: "tt10322274",
        name: "Schumacher",
        poster: "https://m.media-amazon.com/images/M/MV5BOWUzYzBjNjAtN2RlNC00YWE5LThlMDEtMjhlOTQwYTY4NTlmXkEyXkFqcGdeQXVyMTI5Nzk4NDQ4._V1_FMjpg_UX1000_.jpg"
     
    },
    {
        id: "tt0120663",
        name: "Eyes Wide Shut",
        poster: "https://flxt.tmsimg.com/assets/p23544_p_v13_av.jpg",
    
    },
    {
        id: "tt0104652",
        name: "Porco Rosso",
        poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4463b1a9af706a0f148357eb00f77aceec3447ebf543c7b48508145052200394._RI_V_TTW_.jpg",
        
    },
    {
        id: "tt0119698",
        name: "Princess Mononoke",
        poster: "https://images-na.ssl-images-amazon.com/images/I/81jSJRqb9IL.jpg",
    
    },
    {
        id: "tt1160419",
        name: "DUNE",
        poster: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61116cea2313e8bae55a536a%2F-Dune-%2F0x0.jpg%3Ffit%3Dscale",
        
    },
    {
        id: "tt2382320",
        name: "No Time to Die",
        poster: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    
    },
    {
        id: "tt9376612",
        name: "Shang-Chi and the Legend of the Ten Rings",
        poster: "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        
    },
    {
        id: "moviett536298862",
        name: "Wind River",
        poster: "https://m.media-amazon.com/images/M/MV5BMTUyMjU1OTUwM15BMl5BanBnXkFtZTgwMDg1NDQ2MjI@._V1_FMjpg_UX1000_.jpg",
        
    },
    {
        id: "tt0361748",
        name: "Inglourious Basterds",
        poster: "https://m.media-amazon.com/images/I/81+4I8lZZeL._SL1500_.jpg",
    
    },
    {
        id: "tt9231040",
        name: "First Cow",
        poster: "https://m.media-amazon.com/images/M/MV5BMGUzMGEzM2UtMDg2Ny00Yjk1LTgxMTctMWI1ZGM0ZDBiYjgxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        
    },
    {
        id: "tt9639470",
        name: "Last Night in Soho",
        poster: "https://m.media-amazon.com/images/M/MV5BZjgwZDIwY2MtNGZlNy00NGRlLWFmNTgtOTBkZThjMDUwMGJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
        
    },
    {
        id: "tt1270797",
        name: "Venom: Let There Be Carnage",
        poster: "https://www.cuopm.com/wp-content/uploads/2021/10/1-1.jpeg",
    
    },
    // {
    //     id: "movie1",
    //     name: "Rising Arizona",
    //     releaseYear: "",
    //     runtime: "",
    //     summary: "",
    //     director: "",
    //     actors: "",
    //     writers: "",
    //     genre: "",
    //     links: {
    //         imdb: "",
    //         rottenTomatoes: "",
    //         poster: "",
    //     }
    // },
    
];
