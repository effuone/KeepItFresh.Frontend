import * as React from "react";
import useBem from "../../hooks/useBem";
import "./ProfilePage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import Button from "../../shared/Button";
import { useSelector } from "../../hooks/useSelector";
import jwt_decode from "jwt-decode";
import UserService from "../../services/user.service";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);
  let user = useSelector((state) => state.auth.user);
  user = jwt_decode(user.token);
  const [first_name, setFirst_name] = useState("");
  const [image, setImage] = useState("");
  const [skintype, setSkintype] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {
    console.log("done");

    if (isAuthorizedUser) {
      UserService.getCurrentUser(user.id)
        .then((res) => {
          console.log("res", res.data);
          setFirst_name(res.data.first_name);
          setImage(res.data.image);
          setSkintype(res.data.skintype);
          setUsername(res.data.username);
        })
        .catch((err) => {
          console.log("err", err);
        })
        .then(() => {});
    }
  }, []);
  const { bemBlock, bemElement } = useBem("ProfilePage");

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <div style={{ width: "40%" }}>
          <div className={bemElement("aboutCard")}>
            <div className={bemElement("aboutCard-rectangle")}></div>
            <div className={bemElement("aboutCard-second-block")}>
              <h3>{first_name}</h3>
            </div>
          </div>
          <div className={bemElement("infoCard")}>
            <div className={bemElement("infoCard-block")}>
              <strong>Username:</strong>
              <p>{username}</p>
            </div>
            <div className={bemElement("infoCard-block")}>
              <strong>Skin:</strong>
              <p>{skintype}</p>
            </div>
            <Button label={"Редактировать"}></Button>
          </div>
        </div>
        <div className={bemElement("cosmetics")} style={{ width: "60%" }}></div>
      </ContentContainer>
    </SectionContainer>
  );
}
