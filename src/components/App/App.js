import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '@wix/wix-i18n-config';
import {
  Button,
  Container,
  Row,
  Col,
  Box,
  Card,
  FormField,
  Input,
  Dropdown,
} from 'wix-style-react';

class App extends React.Component {
  static propTypes = {
    t: PropTypes.func,
  };
  state = { charCount: 0, inputValue: '', dropdownSelectedId: -1 };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header title="Inputs and Selection" />
                <Card.Content>
                  <Container fluid>
                    <Row>
                      <Col span={8}>
                        <FormField
                          label="<Input/> - A simple Input"
                          infoContent="Use this for regular text input"
                        >
                          <Input
                            value={this.state.inputValue}
                            onChange={(e) =>
                              this.setState({ inputValue: e.target.value })
                            }
                            status="error"
                            statusMessage="This is error"
                          />
                        </FormField>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={8}>
                        <FormField
                          label="<Dropdown/> - A simple select component"
                          infoContent="Use this to pick a value from a set"
                        >
                          <Dropdown
                            selectedId={this.state.dropdownSelectedId}
                            onSelect={(option) =>
                              this.setState({ dropdownSelectedId: option.id })
                            }
                            options={[
                              {
                                id: 0,
                                value: 'first option',
                              },
                              {
                                id: 1,
                                value: 'second option',
                              },
                              {
                                id: 2,
                                value: 'third option',
                              },
                            ]}
                          />
                        </FormField>
                      </Col>
                    </Row>
                  </Container>
                </Card.Content>
              </Card>
            </Col>
          </Row>
        </Container>
        <Card>
          <Card.Header title="first card"></Card.Header>
          <Card.Divider />
          <Card.Content>
            <Row>
              <Col span={6}>
                <FormField
                  label="my unique field"
                  required
                  infoContent="Help me fill the field"
                  charCount={5 - this.state.charCount}
                >
                  <Input
                    onChange={(event) =>
                      this.setState({ charCount: event.target.value.length })
                    }
                  />
                </FormField>
              </Col>
            </Row>
          </Card.Content>
        </Card>
        <FormField
          label="An input field"
          required
          infoContent="Help me fill the field"
        >
          <Input />
        </FormField>
        <Button>Hello world</Button>{' '}
        <Container>
          <Row>
            <Col>
              <Box border="1px solid black">I am a full row</Box>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Box border="1px solid black">I take half of the size</Box>
            </Col>
            <Col span={6}>
              <Box border="1px solid black">me too</Box>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <Box border="1px solid black">I take third of the size</Box>
            </Col>
            <Col span={8}>
              <Box border="1px solid black">I take two thirds of the row</Box>
            </Col>
          </Row>

          <Row>
            <Col span={6}>
              <Row>
                <Col span={6}>
                  <Box border="1px solid black">I take half of the size</Box>
                </Col>
                <Col span={6}>
                  <Box border="1px solid black">me too</Box>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col span={6}>
              <Card>
                <Card.Header title="first card" subtitle="nice" />
                <Card.Divider />
                <Card.Content>some content</Card.Content>
              </Card>
            </Col>
            <Col span={6}>
              <Card>
                <Card.Header title="What is Lorem Ipsum?" />
                <Card.Divider />
                <Card.Content>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Card.Content>
              </Card>
            </Col>
          </Row>
          {/* equal height */}
          <Row stretchViewsVertically>
            <Col span={4}>
              <Card stretchVertically>
                <Card.Header title="first card" />
                <Card.Divider />
                <Card.Content>some content</Card.Content>
              </Card>
            </Col>
            <Col span={4}>
              <Card stretchVertically>
                <Card.Header title="second card" subtitle="nice" />
                <Card.Divider />
                <Card.Content>some more content</Card.Content>
              </Card>
            </Col>
            <Col span={4}>
              <Card stretchVertically>
                <Card.Header title="third card" subtitle="cool" />
                <Card.Divider />
                <Card.Content>some more content again</Card.Content>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* Grid inside a card */}
        <Container>
          <Row>
            <Col span={6}>
              <Card>
                <Card.Header title="first card" />
                <Card.Divider />
                <Card.Content>
                  <Row>
                    <Col span={4}>first part</Col>
                    <Col span={4}>second part</Col>
                    <Col span={4}>third part</Col>
                  </Row>
                </Card.Content>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default withTranslation()(App);
