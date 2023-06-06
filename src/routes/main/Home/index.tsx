import {
  AlignDropdown,
  Button,
  Card,
  DropdownToggle,
  useHtml,
} from "@front-app-react/elements";
import { Fragment, useEffect } from "react";

const Home = () => {
  const { modal } = useHtml();

  return (
    <Fragment>
      <Card
        className="p-5"
        $border={{
          color: {
            variant: {
              name: "red",
            },
          },
        }}
      >
        asdasd
      </Card>
      <Button
        onClick={() => {
          modal.onOpen({
            children: [...Array(500)].map((item, index) => (
              <Button key={index} onClick={() => modal.onClose()}>
                adasd
              </Button>
            )),
          });
        }}
      >
        modal open
      </Button>
      <DropdownToggle align={AlignDropdown.center} content="asdasd">
        asdasd
      </DropdownToggle>
      {/* <Dropdown btn={<DropdownToggle>asdasd</DropdownToggle>}>menu</Dropdown> */}
    </Fragment>
  );
};

export default Home;
