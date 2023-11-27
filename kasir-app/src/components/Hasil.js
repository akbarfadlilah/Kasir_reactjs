import React, { Component } from "react"
import { Badge, Col, ListGroup, Row} from 'react-bootstrap';
import { numberWithCommas } from "../utils/utils";
import TotalBayar from "./TotalBayar";
import ModalKeranjang from "./ModalKeranjang";

export default class Hasil extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false,
            keranjangDetail: false,
            jumlah: 0,
            keterangan: '',
        }
    }

    handleShow = (menuKeranjang) => {
        this.setState({
            showModal: true,
            keranjangDetail: menuKeranjang
        })
    }

    handleClose = () => {
        this.setState({
            showModal: false
        })
    }


    render() {
        const { keranjangs } = this.props
        return (
            <Col md={2} mt="2">
                <h4><strong>Hasil</strong></h4>
                <hr />
                {keranjangs.length !== 0 && (
                    <ListGroup variant="flush">
                        {keranjangs.map((menuKeranjang) => (
                            <ListGroup.Item key={menuKeranjang.id} onClick={() => this.handleShow(menuKeranjang)}>
                                <Row>
                                    <Col xs={2}>
                                        <h6>
                                            <Badge pill variant="success">
                                                {menuKeranjang.jumlah}
                                            </Badge>
                                        </h6>
                                    </Col>
                                    <Col>
                                        <h7>{menuKeranjang.product.nama}</h7>
                                        <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                                    </Col>
                                    <Col>
                                        <strong className="float-right">Rp. {numberWithCommas(menuKeranjang.total_harga)}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))} 

                            < ModalKeranjang handleClose={this.handleClose} {...this.state} />

                    </ListGroup>
                )}

                <TotalBayar keranjangs={keranjangs} {...this.props} />

            </Col>
        )
    }
}