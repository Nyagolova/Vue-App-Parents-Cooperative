<template>
    <v-container>
        <v-row justify="center">
            <div id="not-found-wrapper">
                <link href="https://fonts.googleapis.com/css?family=Creepster" rel="stylesheet"> 
                <div id="heading-container">
                <h1 id="heading" class="center-text">404 NOT FOUND</h1>
                </div>
                <div id="eye-container">
                <div class="eyes" id="left-eye">
                    <div class="pupils" id="left-pupil"></div>
                </div>
                <div class="eyes" id="right-eye">
                    <div class="pupils" id="right-pupil"></div>
                </div>
                </div>
                <div id="error-container" class="center-text">
                <h2 id="error" >Къде изчезнaха всички?</h2>
                <p>Каквото и да търсите, няма да го намерите тук.</p>

                <v-container mt-12>
                    <v-btn outlined color="cyan" to="/">
                      <v-icon left>mdi-home</v-icon>
                      ВЪРНИ СЕ В НАЧАЛОТО
                    </v-btn>
                </v-container>
                
                </div>
            </div>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>

#not-found-wrapper{
  /* background-color: #00bcd4 ; */
  color: #00bcd4;
  padding: 2%;
}

.center-text{
  text-align: center;   
}

#heading{
  font-family: 'Creepster', cursive;
  font-size: 5em
}


.eyes{
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background-color: #ffff62;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: blinking 3s ease-out 2 5s;
  
}

#eye-container{  
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
}

.pupils{
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: absolute;
  background-color: black;
  animation: moving-pups 2.5s cubic-bezier(.43,-0.45,.45,1.42) infinite;
}

@keyframes moving-pups{
  0% {left: 14%;}
  50%{left: 70%; }
  100% {left: 14%;}  
}

@keyframes blinking{
  0%{transform: rotateX(0deg);}
  20%{transform: rotateX(90deg);}
  60%{transform: rotateX(45deg);}
  70%{transform: rotateX(30deg);}
  80%{transform: rotateX(0deg);}
  100%{transform: rotateX(0deg);}
}

</style>