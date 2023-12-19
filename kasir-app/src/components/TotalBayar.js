import React, { Component } from 'react'
import axios from 'axios';
import { Button, Col, Row } from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { API_URL } from '../utils/constant'
import { Link } from 'react-router-dom';

export default class TotalBayar extends Component {
    submitTotalBayar = (totalBayar) => {
        const pesanan = {
            total_bayar: totalBayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL + "pesanans", pesanan).then((res) =>{
            this.props.history.push('/sukses')
        })
        };
    render() {
        const totalBayar = this.props.keranjangs.reduce(function (result, item) {
            return result + item.total_harga;
        }, 0);
        return (
            <>
            {/*Web */}
            <div className='fixed-bottom d-none d-md-block'>
                <Row>
                    <Col md={{ span: 3, offset: 9 }} className="px-4">
                        <h5>Total Harga : {" "}
                        <strong className="float-right mr-2">
                            Rp. {numberWithCommas(totalBayar)}
                            </strong>
                            </h5>
                        <div className='d-grid gap-4'>
                            <Button variant='primary' size='lg' className='mt-2 mb-2 mr-2' 
                            onClick={() => this.submitTotalBayar(totalBayar)}
                            as={Link} to='/sukses'
                            >
                                <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> <strong>Bayar</strong>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            {/*Mobile */}
            <div className='s-sm-block d-md-none'>
                <Row>
                    <Col md={{ span: 3, offset: 9 }} className="px-4">
                        <h5>Total Harga : {" "}
                        <strong className="float-right mr-2">
                            Rp. {numberWithCommas(totalBayar)}
                            </strong>
                            </h5>
                        <div className='d-grid gap-4'>
                            <Button variant='primary' size='lg' className='mt-2 mb-2 mr-2' 
                            onClick={() => this.submitTotalBayar(totalBayar)}
                            as={Link} to='/sukses'
                            >
                                <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> <strong>Bayar</strong>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            </>
        )
    }
}