import Todayblog from "./components/Todayblog";
import Yesterday from "./components/Yestarday";
import Previous from "./components/Previous";
import Blog from "./Blog/page";
import Button from "./components/button";

export default function Home() {
  return (
    <>
      <Blog />
      <Button />
      <Todayblog />
      <Yesterday />
      <Previous />
    </>
  );
}
