import React from 'react';
import { SectionStyled } from '../MainArea/styles';
import { PopularSectionStyled } from './styles';
import MainTitle from '../MainTitle';
import blogs from '../../blogs';


function PopularSection() {
  return (
    <PopularSectionStyled>
      <SectionStyled>
        <div className="title-con">
          <MainTitle title={'Montanhas Populares'} para={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'}  />
        </div>
        <div className="blogs">
            {
              blogs.map((blog) =>{
                return <div className="blog" key={blog.id}>
                  <div className="image">
                    <img src={blog.image} alt="" />
                  </div>
                  <h6>{blog.title}</h6>
                  <div className="user">
                    <p>Montanha: </p>
                    <p>{blog.name}</p>
                  </div>
                </div>
              })
            }
        </div>
      </SectionStyled>
    </PopularSectionStyled>
  )
}

export default PopularSection;
