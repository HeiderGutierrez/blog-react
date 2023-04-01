import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./SubscribeForm.scss";

const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <Form className="border p-5 bg-lightblue" onSubmit={handleSubmit(onSubmit)}>
        <Row className="justify-content-between">
          <Col md={5} className="mb-2 mb-md-0">
            <h5 className="font-weight-bold secondfont">
              Suscríbete a nuestro boletín informativo
            </h5>
          </Col>
          <Col md={7}>
            <Row>
              <Col md={12}>
                <Form.Control
                  type="text"
                  placeholder="Enter your e-mail address"
                  {...register("email", { required: true })}
                />
                {errors.email && <Form.Text>This field is required</Form.Text>}
              </Col>
              <Col md={12} className="mt-2">
                <Button type="submit" className="btn btn-success btn-block">
                  Subscribe
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SubscribeForm;
