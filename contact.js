import HeaderView from "../views/script/view/headerView";
import FooterView from "../views/script/view/footerView";

import { logOut } from "../models/script/logOut";

const handleLogOut = async function () {
  const res = await logOut();
  res.ok && window.location.assign("../index.php");
};


const init = function () {
  handleLogOut();
}

init();
