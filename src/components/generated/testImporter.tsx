import { component$, useSignal, useStyles$, useTask$ } from "@builder.io/qwik";
import Test1 from "./test1";
import Test2 from "./test2";
import Test3 from "./test3";
import Test4 from "./test4";
import Test5 from "./test5";
import Test6 from "./test6";
import Test7 from "./test7";
import Test8 from "./test8";
import Test9 from "./test9";
import { useContent } from "@builder.io/qwik-city";
import { Collapsible, Modal } from "@qwik-ui/headless";
import { useTheme } from "./use-theme";

export const testLogger = () => {
  console.log("testLogger");
};

export const TestImporter = component$(() => {
  const { menu } = useContent();
  const theme = useTheme();

  const isDark = useSignal(false);
  useStyles$(`
        .test-importer {
            color: red;
        }
    `);

  useTask$(({ track }) => {
    track(() => theme.value);
    theme.value === "dark" ? (isDark.value = true) : (isDark.value = false);
    console.log("theme", theme.value);
    testLogger();
  });

  //   const reallyDark = useComputed$(() => {
  //     return isDark.value ? "black" : "white";
  //   });

  return (
    <>
      <div
        class="test-importer"
        style={{
          backgroundColor: isDark.value ? "green" : "yellow",
        }}
      >
        <p>TestImporter</p>
        <p>Menu: {menu?.items?.length}</p>
        {/* <p style={{ backgroundColor: reallyDark.value, color: "white" }}>
          Really Dark: {reallyDark.value}
        </p> */}
        <Collapsible.Root>
          <Collapsible.Trigger>COLLAPSIBLE</Collapsible.Trigger>
          <Collapsible.Content>
            <p>Hello</p>
          </Collapsible.Content>
        </Collapsible.Root>
        <Modal.Root>
          <Modal.Trigger>Modal</Modal.Trigger>
          <Modal.Panel>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>Modal Description</Modal.Description>
          </Modal.Panel>
        </Modal.Root>
        <Test1 />
        <Test2 />
        <Test3 />
        <Test4 />
        <Test5 />
        <Test6 />
        <Test7 />
        <Test8 />
        <Test9 />
      </div>
    </>
  );
});
