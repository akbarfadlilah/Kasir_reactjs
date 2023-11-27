import axios from 'axios';
import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { API_URL } from '../utils/constant';

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function(item) {
          return axios
            .delete(API_URL+"keranjangs/"+item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error))
        })
      })
      .catch(error => {
        console.log("Sedang Error", error);
      });
  }
  render() {
    return (
      <div className='mt-4 text-center'>
        <Image src="asset/images/sukses.png" width="500" />
        <h2>Pesanan Anda Berhasil</h2>
        <p>Terimakasih Sudah Memesan</p>
        <Button variant='primary' as={Link} to="/">
            Kembali
        </Button>
      </div>
    )
  }
}
