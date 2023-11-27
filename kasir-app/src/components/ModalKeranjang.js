import React from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail, jumlah, keterangan }) => {
    if (keranjangDetail) {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {keranjangDetail.product.nama} {""}
                        <strong>
                            (Rp. {numberWithCommas(keranjangDetail.product.harga)})
                        </strong>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Total Harga :</Form.Label>
                            <p>
                                <strong>Rp. {numberWithCommas(keranjangDetail.total_harga)} </strong>
                            </p>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Jumlah :</Form.Label>
                            <br />
                            <Button variant="primary" size="sm" className="mr-2">
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                            <strong>{jumlah}</strong>
                            <Button variant="primary" size="sm" className="ml-2">
                                <FontAwesomeIcon icon={faMinus} />
                            </Button>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Keterangan :</Form.Label>
                            <Form.Control as="textarea" rows={3} name="keterangan" placeholder="Contoh : Pedes, Nasi Setengah"
                            value={keterangan}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    } else {
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Kosong</Modal.Title>
                </Modal.Header>
                <Modal.Body>Kosong</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default ModalKeranjang