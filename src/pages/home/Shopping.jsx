import React, { useState } from "react";
import CatalogNav from "../catalog/CatalogNav";
import {
  Box,
  Button,
  TextField,
  Stack,
  Typography,
} from "@mui/material";
import BasicSelect from "../catalog/Select";
import Image from "mui-image";
import { Delete, RemoveCircle } from "@mui/icons-material";
import { AddCircle } from "@mui/icons-material";
// import Formik from './Formik'

const localCharacter = localStorage.getItem("HomeDecor-SetImage");
const character = JSON.parse(localCharacter);
const localFrame = localStorage.getItem("HomeDecor-SetFrame");
const Frame = JSON.parse(localFrame);

const Shopping = () => {
  const Post = () => {
    const userAddress = document.querySelector("#userAddress");
    const userName = document.querySelector("#userName");
    const userPhone = document.querySelector("#userPhone");
    const giftCardNumber = document.querySelector("#giftNumber");
    const Comments = document.querySelector("#Comments");
    const userAccount = document.querySelector("#userAccount");
    const Select2 = document.querySelector("#cities");
    const Pickup = document.querySelector('#pickup');
    const Payment = document.querySelector('#Payment');
      const userBtn = document
      .querySelector("#userBtn")
      .addEventListener("click", () => createHandler());
    const createHandler = async () => {
      const user ={
        CART:[  {
              "_id":character._id,
              "title":character.title,
              "size": character.printSizePost[0].prSize,
              "cost": Cost,
              "img": character.coverImageName.filename,
              "quantity": count
            } ,
            {
              "_id":Frame._id,
              "title":Frame.frameName,
              "size": Frame.frameSize,
              "cost": CostFrame,
              "img": Frame.coverImageName.filename,
              "quantity": count1,
            } ],
        address: userAddress.value,
        name: userName.value,
        phone: userPhone.value,
        city: Select2.value,
        giftCardNumber: giftCardNumber.value,
        comments: Comments.value,
        totalCost: TotalPrice,
        status: "В ожидании",
        paymentMethod: Payment.value,
        insta: userAccount.value,
        deliveryType: Pickup.value,
        _id: "",
      };
       fetch('http://216.250.9.208:1498/api/orders',{
          method:'POST',
          headers:{'Content-type':'application-json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    
      // console.log(user);
    }; 
    
    };
    Post();
  const [age, setAge] = React.useState("");
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const Cost = character.printSizePost[0].pricePost;
  const CostFrame = Frame.frameСost;
  const FramePrice = CostFrame * count;
  const paintingPrice = Cost * count1;
  const TotalPrice = FramePrice + paintingPrice;
  return (
    <>
      <CatalogNav />
      <Box
        mt={5}
        mb={5}
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-evenly",
        }}
      >
        <Stack direction="column" alignItems="start" justifyContent="start">
          <h1>Корзина</h1>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
            className="item"
          >
            <Image
              width="200px"
              height="200px"
              direction="row"
              alt=""
              className="api-image"
              src={`http://216.250.9.208:1498/uploads/paintings/${character.coverImageName.filename}`}
            />
            <Stack direction="column" spacing={3}>
              <h3>{character.title}</h3>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={3}
              >
                <Typography fontWeight="600">
                  Размер:{character.printSizePost[0].prSize}
                </Typography>
                <button
                  onClick={() => {
                    setCount1(count1 + 1);
                  }}
                  style={{
                    backgroundColor: "#fff",
                    color: "#908989",
                    width: "30px",
                    height: "30px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid #fff ",
                    cursor: "pointer",
                  }}
                >
                  <AddCircle />
                </button>
                <Stack>{count1}</Stack>
                <button
                  onClick={() => {
                    setCount1(count1 - 1);
                  }}
                  style={{
                    backgroundColor: "#fff",
                    color: "#908989",
                    width: "30px",
                    height: "30px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid #fff ",
                    cursor: "pointer",
                  }}
                >
                  <RemoveCircle />
                </button>
                <Button
                  sx={{
                    backgroundColor: "#fff",
                    color: "red",
                    minWidth: "30px",
                  }}
                  onClick={() => {
                    localStorage.removeItem(`HomeDecor-SetImage`);
                  }}
                >
                  <Delete />
                </Button>
              </Stack>
              <Button
                sx={{
                  backgroundColor: "blue",
                  color: "#fff",
                }}
              >
                {`${paintingPrice} ман `}
              </Button>
            </Stack>
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Image
              width="200px"
              height="200px"
              direction="row"
              alt=""
              className="api-image"
              src={`http://216.250.9.208:1498/uploads/paintings/${Frame.coverImageName.filename}`}
            />
            <Stack direction="column" spacing={3} m="0 40px">
              <h3>{Frame.frameName}</h3>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                spacing={3}
              >
                <Typography fontWeight="600">
                  Размер:{Frame.frameSize}
                </Typography>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  style={{
                    backgroundColor: "#fff",
                    color: "#908989",
                    width: "30px",
                    height: "30px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid #fff ",
                    cursor: "pointer",
                  }}
                >
                  <AddCircle />
                </button>
                <Stack id='Paintcount'>{count}</Stack>
                <button
                  onClick={() => {
                    setCount(count - 1);
                  }}
                  style={{
                    backgroundColor: "#fff",
                    color: "#908989",
                    width: "30px",
                    height: "30px",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid #fff ",
                    cursor: "pointer",
                  }}
                >
                  <RemoveCircle />
                </button>
                <Button
                  sx={{
                    backgroundColor: "#fff",
                    color: "red",
                    minWidth: "30px",
                  }}
                  onClick={() => {
                    localStorage.removeItem(`HomeDecor-SetFrame`);
                  }}
                >
                  <Delete />
                </Button>
              </Stack>
              <Button
                sx={{
                  backgroundColor: "blue",
                  color: "#fff",
                }}
              >
                {`${FramePrice} ман `}
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          borderLeft="2px solid #908989"
          spacing={2}
        >
          <Stack direction="column" alignItems="start" ml={10} spacing={2}>
            <Typography fontWeight="bold" fontSize="23px">
              Оформления заказа
            </Typography>
            <Typography fontSize="14px">Вид доставки</Typography>
              
            <Stack direction="row" spacing={3} width="300px">
                <select name="" id="pickup" sx={{width:"300px"}}>
                  <option value="Pickup">Самовывоз</option>
                  <option value="Delivery">Доставкa</option>
                </select>
            </Stack>
            <Stack direction="column" borderTop="2px solid #908989" spacing={2}>
              <Typography mt={2}>Способ оплаты</Typography>
              <Stack direction="row" spacing={3} width="300px">
              <select name="" id="Payment">
                  <option value="cash">Наличными</option>
                  <option value="e-money">Онлайн оплата</option>
              </select>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              borderTop="2px solid #908989"
              spacing={2}
              width="300px"
            >
              <Typography mt={2}>Адрес доставки</Typography>
              {/* <FormControl fullWidth> */}
              {/* <InputLabel id="demo-simple-select-label">Город</InputLabel> */}
              <select
                label="Город"
                labelId="demo-simple-select-label"
                id="cities"
                className="cities"
                // value={age}
                onChange={handleChange}
              >
                <option value="Ашхабад">Ашхабад</option>
                <option value="Дашогуз">Дашогуз</option>
                <option value="Мары">Мары</option>
                <option value="Туркменабат">Туркменабат</option>
                <option value="Балканабат">Балканабат</option>
              </select>
              {/* </FormControl> */}
              <TextField id="userAddress" label="Адрес" type="text"></TextField>
            </Stack>
            <Stack
              direction="column"
              borderTop="2px solid #908989"
              spacing={2}
              width="300px"
            >
              <Typography mt={2}>Ваши контакты</Typography>
              <TextField
                id="userName"
                label="Фамилия, имя"
                type="text"
              ></TextField>
              <Stack alignItems="center" direction="row">
                <TextField
                  sx={{ width: "245px" }}
                  id="userPhone"
                  label="Номер телефона (+993)"
                  type="number"
                ></TextField>
                <Stack
                  border="1px solid #908989"
                  borderRadius="50%"
                  width="40px"
                  height="40px"
                  alignItems="center"
                  direction="row"
                  justifyContent="center"
                  color="#908989"
                  ml={"10px"}
                  className="tooltip"
                >
                  ?<span className="tooltiptext">Your phone number</span>
                </Stack>
              </Stack>
              <Stack alignItems="center" direction="row">
                <TextField
                  sx={{ width: "245px" }}
                  id="userAccount"
                  label="Вы в Instagram"
                  type="text"
                ></TextField>
                <Stack
                  border="1px solid #908989"
                  borderRadius="50%"
                  width="40px"
                  height="40px"
                  alignItems="center"
                  direction="row"
                  justifyContent="center"
                  color="#908989"
                  ml={"10px"}
                  className="tooltip"
                >
                  ?
                  <span className="tooltiptext">
                    Your Instagram account name
                  </span>
                </Stack>
              </Stack>
              <TextField
                id="Comments"
                label="Комментарий"
                type="text"
              ></TextField>
              <Stack alignItems="center" direction="row">
                <TextField
                  sx={{ width: "245px" }}
                  id="giftNumber"
                  label="Номер подарочного сертификата"
                  type="number"
                ></TextField>
                <Stack
                  border="1px solid #908989"
                  borderRadius="50%"
                  width="40px"
                  height="40px"
                  alignItems="center"
                  direction="row"
                  justifyContent="center"
                  color="#908989"
                  ml={"10px"}
                  className="tooltip"
                >
                  ?<span className="tooltiptext">Your gift card number</span>
                </Stack>
              </Stack>
              <h3 id="totalPrice" className="totalPrice">Итого:{`${TotalPrice} ман `}</h3>
              <Button
                className="FormName"
                id="userBtn"
                type="submit"
                sx={{
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Оформить заказ
              </Button>
              <BasicSelect />
              {/* <Formik/> */}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
export default Shopping;
