<svelte:options tag="lst-button" />

<script lang="ts">
  import "../../variables.scss";

  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * What background color to use
   */
  export let backgroundColor: string = "";
  /**
   * How large should the button be?
   */
  export let size: "small" | "medium" | "large" = "medium";
  /**
   * Button contents
   */
  export let label: string = "";

  $: mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  $: style = backgroundColor ? `background-color: ${backgroundColor}` : "";
</script>

<button
  type="button"
  class={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
  {style}
  on:click
>
  {label}
</button>

<style lang="scss">
  .storybook-button {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .storybook-button--primary {
    color: white;
    background-color: var(--main-bg-color);
  }
  .storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  .storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
</style>
