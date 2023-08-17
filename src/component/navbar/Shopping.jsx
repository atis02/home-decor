import React, { useState } from "react";
import CatalogNav from "../../pages/catalog/CatalogNav";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import BasicSelect from "../../pages/catalog/Select";
import Image from "mui-image";
import { Delete, RemoveCircle } from "@mui/icons-material";
import { AddCircle } from "@mui/icons-material";

const localCharacter = localStorage.getItem("HomeDecor-SetImage");
const character = JSON.parse(localCharacter);
const localFrame = localStorage.getItem("HomeDecor-SetFrame");
const Frame = JSON.parse(localFrame);
const Shopping = () => {
  const [age, setAge] = React.useState("");
  const [count, setCount] = useState(1);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const Cost = character.printSizePost[0].pricePost;
  const CostFrame = Frame.frameСost;
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
                <Stack>{count}</Stack>
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
                {`${Cost} ман `}
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
            <Stack direction="column" spacing={3} m='0 40px'>
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
                <Stack>{count}</Stack>
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
                {`${CostFrame} ман `}
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
            <Typography
              fontSize="18px"
              fontWeight="bold"
              spacing={5}
              direction="row"
            >
              Самовывоз
              <input
                type="radio"
                id="Самовывоз"
                name="Вид доставки"
                value="Самовывоз"
              />
              <input type="radio" id="1" name="Вид доставки" value="1" />
            </Typography>
            <Stack direction="column" borderTop="2px solid #908989" spacing={2}>
              <Typography mt={2}>Способ оплаты</Typography>
              <Stack direction="row" spacing={3}>
                <Typography fontSize="18px" fontWeight="bold">
                  Наличными
                  <input
                    type="radio"
                    id="Наличными"
                    name="Способ оплаты"
                    value="Наличными"
                  />
                </Typography>
                <Typography fontSize="18px" fontWeight="bold">
                  Онлайн оплата
                  <input
                    type="radio"
                    id="Онлайн оплата"
                    name="Способ оплаты"
                    value="Онлайн оплата"
                  />
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="column"
              borderTop="2px solid #908989"
              spacing={2}
              width="300px"
            >
              <Typography mt={2}>Адрес доставки</Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Город</InputLabel>
                <Select
                  label="Город"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                >
                  <MenuItem value={"Ашхабад"}>Ашхабад</MenuItem>
                  <MenuItem value={"Дашогуз"}>Дашогуз</MenuItem>
                  <MenuItem value={"Мары"}>Мары</MenuItem>
                  <MenuItem value={"Туркменабат"}>Туркменабат</MenuItem>
                  <MenuItem value={"Балканабат"}>Балканабат</MenuItem>
                </Select>
              </FormControl>
              <TextField id="outlined-basic" label="Адрес"></TextField>
            </Stack>
            <Stack
              direction="column"
              borderTop="2px solid #908989"
              spacing={2}
              width="300px"
            >
              <Typography mt={2}>Ваши контакты</Typography>
              <TextField id="outlined-basic" label="Фамилия, имя"></TextField>
              <Stack alignItems="center" direction="row">
                <TextField
                  sx={{ width: "245px" }}
                  id="outlined-basic"
                  label="Номер телефона (+993)"
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
                  id="outlined-basic"
                  label="Вы в Instagram"
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
              <TextField id="outlined-basic" label="Комментарий"></TextField>
              <Stack alignItems="center" direction="row">
                <TextField
                  sx={{ width: "245px" }}
                  id="outlined-basic"
                  label="Номер подарочного сертификата"
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
              <h3>Итого:{CostFrame+Cost}</h3>
              <Button
                sx={{
                  backgroundColor: "blue",
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Оформить заказ
              </Button>
              <BasicSelect />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Shopping;
