import { BrowserRouter } from "react-router-dom";
import App from "@app/containers/App";
import { AuthProvider } from "@app/hook/auth";
import { ThemeStyle } from "@app/containers/ThemeStyle";
import { ElementsProvider } from "@front-app-react/elements";

function MainApp() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ElementsProvider
          styles={{
            btn: {
              $bgColor: {
                active: {
                  name: "red",
                },
              },
            },
            overlayBg: {
              name: "dark",
              mood: 1,
              opacity: 0.5,
            },
            dropdownMenu: {
              style: {
                $bgColor: {
                  variant: {
                    name: "light",
                  },
                },
              },
            },
            modal: {
              content: {
                $bgColor: {
                  variant: {
                    name: "light",
                  },
                },
                $borderColor: {
                  variant: {
                    name: "light",
                    mood: 2,
                  },
                },
                maxWidth: "500px",
                borderRadius: "4px",
              },
            },
            card: {
              $bgColor: {
                name: "yellow",
              },
            },
          }}
          theme={{
            defaultColor: "light",
            defaultLang: "en-US",
            prefix: "app",
            storage: localStorage,
          }}
        >
          <ThemeStyle />
          <App />
        </ElementsProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default MainApp;
