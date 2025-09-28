import { useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";

export const useTheme = () => {
  const theme = useSignal("");
  useVisibleTask$(({ track }) => {
    track(() => theme.value);
    theme.value = "dark";
    console.log("visible theme", theme.value);
  });

  useTask$(({ track }) => {
    track(() => theme.value);
    console.log("theme", theme.value);
  });

  useTask$(({ track }) => {
    track(() => theme.value);
    console.log("theme", theme.value);
  });

  useTask$(({ track }) => {
    track(() => theme.value);
    console.log("theme", theme.value);
  });

  useTask$(({ track }) => {
    track(() => theme.value);
    console.log("theme", theme.value);
  });

  useTask$(({ track }) => {
    track(() => theme.value);
    console.log("theme", theme.value);
  });

  useTask$(({ track }) => {
    track(() => theme.value);
    console.log("theme", theme.value);
  });

  useTask$(({ track }) => {
    track(() => theme.value);
    console.log("theme", theme.value);
  });

  useTask$(({ track }) => {
    track(() => theme.value);
    console.log("theme", theme.value);
  });

  useTask$(({ track }) => {
    track(() => theme.value);
    console.log("theme", theme.value);
  });
  return theme;
};
