import { PageTemplate } from "templates/PageTemplate"
import info from 'config'
import styled from "styled-components"
import { Col, Row } from "components/Grid"
import perfil from 'assets/perfil.jpg'
import { ImageResponsive } from "components/ImageResponsive"

const RowResume = styled(Row)`

    img {
        border-radius: 10px;
    }
    .left {
        background-color: black !important;
        padding: 10px;
        color: ${(props) => props.theme.color.light};
    }

    .top-left {
        border-top-left-radius: 10px;
    }
    .bottom-left {
        border-bottom-left-radius: 10px;
    }
`

export const Resume = () => {
    return (
        <PageTemplate 
        title={''}
        description={""}>
            <RowResume>
                <Col className="left top-left" md={4} style={{backgroundColor: 'black', color: 'white', padding: '10px', display: 'flex', justifyContent: 'center'}}>
                    
                    <ImageResponsive src={perfil} alt='perfil' style={{width: '70%'}}/>
                </Col>
                <Col className="" md={6}>about me y contacto</Col>
            </RowResume>
            <RowResume>
                <Col className="left" md={4} >Educacion</Col>
                <Col className="" md={6}>Detalels de educacion</Col>
            </RowResume>
            <RowResume>
                <Col className="left" md={4}>Experiencia</Col>
                <Col className="" md={6}>Detalels de experiencia</Col>
            </RowResume>
            <RowResume>
                <Col className="left bottom-left" md={4}>Habilidades</Col>
                <Col className="" md={6}>Detalels de habilidades</Col>
            </RowResume>
        </PageTemplate>
    )
}