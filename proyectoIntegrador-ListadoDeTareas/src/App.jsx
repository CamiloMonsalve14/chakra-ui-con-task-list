import Header from "./components/Header";
import Task from "./components/Task";
// import {TaskList} from "./components/TaskList"
// import "./App.css"
import { Box, SimpleGrid } from "@chakra-ui/react";

// fetch("http://localhost:5000/tasks", {
//   method: "Get",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

function App() {
  return (
    <>
      <Box
        bg="grey"
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        w="auto"
        h="90vh"
      >
        <SimpleGrid>
          <Box
            boxShadow="black-lg"
            display="flex"
            flexDirection="column"
            border="dotted"
            borderRadius="20px"
            w="650px"
            overflow="auto"
            bgGradient="linear(to-r, blue.400, red.500)"
          >
          <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          >
            <Header />
          </Box>

            <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            margin={"25px"}
            >
              <Task />
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
export default App;
