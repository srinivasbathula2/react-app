import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: "Potato", price: 200,image:"potato.jpeg"},
            { name: "Tomato", price: 300 ,image:"toamato.jpeg"},
            { name: "Raddish", price: 150,image:"radish.jpeg"},
            { name: "Paneer", price: 800,image:"paneer.jpeg"},
            { name: "Eggplant", price: 100,image:"eggplant.jpeg" },
            { name: "Carrot", price: 50, image:"public/Carrot-fruits.jpg"},
            { name: "Onion", price: 60 ,image:"public/onion.jpeg"},
            { name: "Cabbage", price: 40 ,image:"public/cabbage.jpeg"},
            { name: "Cauliflower", price: 55 ,image:"public/cauliflower.jpeg"},
            { name: "Brinjal", price: 35, image:"public/brinjal.jpeg" },
            { name: "Lady Finger", price: 45 , image:"Lady Finger.jpg"},
            { name: "Pumpkin", price: 38 ,image:"public/pumpkin.jpeg"},
            { name: "Radish", price: 28 ,image:"public/radish.jpeg"},
            { name: "Capsicum", price: 50,image:"public/capsicum.jpeg" },
            { name: "Coriander", price: 20, image:"public/coriender.jpeg" },
            { name: "Cucumber", price: 30,image:"public/cucumber.jpeg" },
            { name: "Spinach", price: 25,image:"public/spinach.jpeg" },
            { name: "Fenugreek", price: 22 ,image:"public/fenugreek.jpeg"},
            { name: "Bottle Gourd", price: 35,image:"public/bottle guard.jpeg" },
            { name: "Bitter Gourd", price: 40 ,image:"public/bitterguard.jpeg"},
            { name: "Spring Onion", price: 45,image: "public/spring onion.jpeg"},
            { name: "Zucchini", price: 60 ,image:"public/zucchini.jpeg"},
            { name: "Turnip", price: 30 ,image:"public/turnip.jpeg"},
            { name: "Sweet Corn", price: 55 ,image:"public/sweet corn.jpeg" },
            { name: "Mushroom", price: 80 ,image:"public/mushroom.jpeg"},
            { name: "Lettuce", price: 45 ,image:"public/letucee.jpeg"},
            { name: "Beetroot", price: 40 ,image:"public/beetroot.jpeg"},
            { name: "Garlic", price: 70 ,image:"public/garlic.jpeg"},
            { name: "Ginger", price: 90 ,image:"public/ginger.jpeg"},
            { name: "Drumstick", price: 50 ,image:"public/drumstick.jpeg" },
            { name: "Asparagus", price: 100 ,image:"public/asparagus.jpeg"},
            { name: "Broccoli", price: 120 ,image:"public/broccli.jpeg"},
        ],
        nonVeg: [
            { name: "Chicken", price: 200,image:"public/chicken.jpeg"},
            { name: "Mutton", price: 500,image:"public/mutton.jpeg" },
            { name: "Prawns", price: 400 ,image:"public/prawns.jpeg"},
            { name: "Crab", price: 250 ,image:"crab.jpeg"},
            { name: "Squid", price: 350, image:"squid.jpeg"},
            { name: "Squid", price: 450,image:"public/squid.jpeg" },
            { name: "Salmon", price: 1000,image: "public/salmon.jpg"},
            { name: "Turkey", price: 1200 ,image:"public/turkey.jpg"},
            { name: "Duck", price: 800 ,image:"public/duck.jpg"},
            { name: "Lamb Chops", price: 900,image:"public/lamb.jpg" },
            { name: "Beef Steak", price: 950 ,image:"public/beaf.jpg"},
            { name: "Pork Chops", price: 750 ,image:"public/pork.jpg"},
            { name: "Quail", price: 700 ,image:"public/quail.jpg"},
            { name: "Goat Meat", price: 850 ,image:"public/mutton.jpeg"},
            { name: "Buffalo Meat", price: 920 ,image:"public/b meat.jpg"},
            { name: "Tilapia", price: 400 ,image:"public/tilapia.jpg"},
            { name: "Catfish", price: 430,image: "public/catfish.jpg"},
            { name: "Shrimp", price: 700 ,image:"public/shrimp.jpg"},
            { name: "Octopus", price: 1100 ,image:"public/Octo.jpg"},
            { name: "Lobster", price: 1500 ,image:"public/lobster.jpg"},
            { name: "Rohu Fish", price: 350 ,image:"public/rohud.jpg"},
            { name: "Hilsa Fish", price: 800,image:"public/hilsa.jpg" },
            { name: "Pomfret", price: 1200 ,image:"public/promfet.jpg"},
            { name: "King Fish", price: 1400 ,image:"public/kingfish.jpg"},
            { name: "Silver Fish", price: 380 ,image:"public/shellfish.jpg"},
            { name: "Shellfish", price: 980 ,image:"public/shellfish.jpg"},
            { name: "Squid Rings", price: 600 ,image:"public/squid.jpeg"},
            { name: "Goat Kidney", price: 500 ,image:"public/goatkidney.jpg"},
            { name: "Chicken Liver", price: 350 ,image:"public/chicken liver.jpg"},
      
        ],
        milk: [
            { name: "Heritage", price: 30 ,image:"public/heritage.jpeg"},
            { name: "Amul", price: 50,image:"public/amul.jpeg" },
            { name: "Dodla Dairy", price: 50, image:"public/dodla.jpeg" },
            { name: "Hatsun", price: 80 ,image:"public/hatsun.jpeg" },
            { name: "Jersey", price: 45 ,image:"public/jersey.jpeg" },
            { name: "Mother Dairy", price: 55,image:"public/mother dairy.jpg"},
            { name: "Aavin", price: 50,image:"public/avin.jpg" },
            { name: "Nandini", price: 45,image:"public/nandini.jpg" },
            { name: "Milky Mist", price: 40,image:"public/MILKY MIST.jpg" },
            { name: "Nestle A+ Milk", price: 70,image:"public/Onestlre.jpg" },
            { name: "Govardhan Milk", price: 48 ,image:"public/govardhan.jpg"},
            { name: "Dairy Pure", price: 52 ,image:"public/dairy pure.jpg"},
            { name: "Country Delight", price: 58 ,image:"public/country delight.jpg"},
            { name: "Pride of Cows", price: 80 ,image:"public/Pride of cows.jpg"},
            { name: "Organic Cow Milk", price: 75 ,image:"public/Organic cow milk.jpg"},
            { name: "Full Cream Milk", price: 65 ,image:"public/full cream.jpg"},
            { name: "Skimmed Milk", price: 40 ,image:"public/skimmed milk.jpg"},
            { name: "Low Fat Milk", price: 45 ,image:"public/OIlow fat.jpg"},
            { name: "Buffalo Milk", price: 50 ,image:"public/buffalo.jpg"},
            { name: "Soy Milk", price: 60 ,image:"public/soymilk.jpg"},
            { name: "Almond Milk", price: 90 ,image:"public/almond milk.jpg"},
            { name: "Oat Milk", price: 100 ,image:"public/oat milk.jpg"},
            { name: "Coconut Milk", price: 85,image:"public/coconut.jpg" },
            { name: "Condensed Milk", price: 120 ,image:"public/condensed.jpg"},
            { name: "Evaporated Milk", price: 110 ,image:"public/evapourated.jpg"},
            { name: "Cheese", price: 350 ,image:"public/cheese.jpg"},
            { name: "Paneer", price: 300 ,image:"public/paneer.jpeg"},
            { name: "Butter", price: 280 ,image:"public/butter.jpg"},
            { name: "Ghee", price: 450 ,image:"public/ghee.jpg"},
            { name: "Curd", price: 60 ,image:"public/CURD.jpg"},
            { name: "sangam", price: 95,image:"public/sangam.jpg" },
      

        ]
    },
    reducers: {}
});
// Cart Slice - Holds cart actions
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);

            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);

            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                return state.filter(item => item.name !== action.payload.name);
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        clearcart: () => []
    }
});

// Purchase Details Slice - Holds the details of the user's purchases
const purchasedetailsSlice = createSlice({
    name: 'purchasedetails',
    initialState: [],
    reducers: {
        addpurchasedetails: (state, action) => {
            state.push(action.payload);
        }
    }
});

// Authentication slice

const authslice =createSlice({
    name:"auth",
    initialState:[],
    reducers:{
        isAuthenticated:localStorage.getItem("username")?
        true:false,
        user:localStorage.getItem("username")||""//get stored username
    },
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username",action.payload);//clear form local storage
        },
        logut:(state)=>{
            state.isAuthenticated=false;
            state.user="";
            localStorage.removeItem("username");//clear from local storage
        },
    },

});

// configure store
const store = configureStore({
    reducer:{
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        purchasedetails: purchasedetailsSlice.reducer,
        auth:authslice.reducer
        }
});

export default store;
export const { addToCart, increment, decrement, remove, clearcart } = cartSlice.actions;
export const { addpurchasedetails } = purchasedetailsSlice.actions;

export const {login,logout}=authslice.actions;