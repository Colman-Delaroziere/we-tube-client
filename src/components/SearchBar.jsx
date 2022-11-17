import { onMount } from "solid-js";

export default function SearchBar() {
  let formRef;
  let searchRef;

  onMount(() => {
    if (formRef) {
      formRef.onsubmit = function () {
        var url = searchRef.value.replace("https://youtu.be/", "");

        window.location =
          location.protocol + "//" + location.host + "/videos/" + url;

        return false;
      };

      window.onload = function () {
        searchRef.focus();
      };
    }
  });

  return (
    <form action="no-js" method="get" ref={formRef}>
      <p>
        URL:
        <input type="text" ref={searchRef} name="url" autofocus="autofocus" />
        <input type="submit" value="Go" />
      </p>
    </form>
  );
}
