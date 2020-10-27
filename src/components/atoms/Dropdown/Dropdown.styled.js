import styled from "styled-components";
import { fontSize, variables } from "../../../styles";


export const DropdownStyle = styled.div`
    position: absolute;
    top: 20px;
    right: 0;
    background-color: white;
    min-width: auto;
    width: 300px;
    z-index: 100;
   
  .dropdown-list{
    margin: 0;
    padding: 0;
    list-style: none;
    border: 2px solid ${variables.grey};
    .dropdown-row{
      display: flex;
      align-items: center;
      padding: 10px;
      &:hover{
        background-color: ${variables.lightBlu};
      }
      &:not(:last-child){
        border-bottom: 1px solid ${variables.grey};
      }
      .image{
        height: 30px;
        width: 60px;
        margin-right: 10px;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .text{
        margin-right: 10px;
        flex: 1;
        .title{
          font-weight: bold;
          font-size: ${fontSize.small};
          margin-bottom: 8px;
        }
        .price{
          font-size: ${fontSize.small};
        }
      }
    }
  }
`;
