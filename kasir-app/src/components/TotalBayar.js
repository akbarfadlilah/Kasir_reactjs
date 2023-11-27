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
            <div className='fixed-bottom'>
                <Row>
                    <Col md={{ span: 2, offset: 10 }} className='px-4'>
                        <h6>Total Harga : {" "}<strong className='float-right ms-4'>Rp. {numberWithCommas(totalBayar)}</strong></h6>
                        <div className='d-grid gap-4'>
                            <Button variant='primary' size='md' className='mt-2 mb-2 mr-2' 
                            onClick={() => this.submitTotalBayar(totalBayar)}
                            as={Link} to='/sukses'
                            >
                                <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> <strong>Bayar</strong>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}