import React from 'react';
import {
  Page,
  Checkbox,
  InputArea,
  Button,
  Container,
  Row,
  Col,
  Box,
  Card,
  FormField,
  Input,
  Dropdown,
  Text,
} from 'wix-style-react';

class App extends React.Component {
  colorOptions = [
    { id: 0, value: 'Red' },
    { id: 1, value: 'Blue' },
    { id: 2, value: 'Green' },
    { id: 3, value: 'Yellow' },
    { id: 4, value: 'Pink' },
  ];

  initialState = {
    name: '',
    favoriteColorId: '',
    funFact: '',
    submittedData: {},
    termsChecked: false,
    isFormSubmitted: false,
  };

  state = {
    ...this.initialState,
  };

  isSubmitEnabled = () => this.state.termsChecked && this.state.name !== '';

  renderSubmittedInfo = () => {
    return this.state.isFormSubmitted ? (
      <Card>
        <Card.Header title="Submitted Info" />
        <Card.Divider />
        <Card.Content>
          <Row>
            <Col span={6}>
              <Text>Name:</Text>
            </Col>
            <Col span={6}>
              <Text dataHook="submitted-name-title">
                {this.state.submittedData.name}
              </Text>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text>Favorite Color:</Text>
            </Col>
            <Col span={6}>
              <Text>{this.state.submittedData.favoriteColor}</Text>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text>Fun fact:</Text>
            </Col>
            <Col span={6}>
              <Text>{this.state.submittedData.funFact}</Text>
            </Col>
          </Row>
        </Card.Content>
      </Card>
    ) : undefined;
  };

  renderSubmitButton = () => (
    <Button
      dataHook="submit-button"
      disabled={!this.isSubmitEnabled()}
      onClick={() =>
        this.setState({
          isFormSubmitted: true,
          submittedData: {
            name: this.state.name,
            favoriteColor: this.state.favoriteColorId
              ? this.colorOptions[this.state.favoriteColorId].value
              : '',
            funFact: this.state.funFact,
          },
        })
      }
    >
      Submit
    </Button>
  );

  renderClearButton = () => (
    <Button
      dataHook="clear-button"
      priority="secondary"
      onClick={() =>
        this.setState({
          name: '',
          favoriteColorId: '',
          funFact: '',
          termsChecked: false,
        })
      }
    >
      Clear
    </Button>
  );

  render() {
    return (
      <>
        <Page height="100vh">
          <Page.Header
            title="WSR Form"
            actionsBar={
              <Box>
                <Box marginRight="12px">{this.renderClearButton()}</Box>
                {this.renderSubmitButton()}
              </Box>
            }
          />
          <Page.Content>
            <Container>
              <Row>
                <Col span={8}>
                  <Card>
                    <Card.Header
                      title="WSR Form"
                      subtitle="Create your own page with wix-style-react"
                    />

                    <Card.Divider />
                    <Card.Content>
                      <Row>
                        <Col span={6}>
                          <FormField label="Name" required>
                            <Input
                              dataHook="name-input"
                              placeholder="Enter a name"
                              value={this.state.name}
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                            />
                          </FormField>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={6}>
                          <FormField label="Favorite color">
                            <Dropdown
                              dataHook="color-input"
                              placeholder="Enter a color"
                              selectedId={this.state.favoriteColorId}
                              onSelect={({ id }) =>
                                this.setState({ favoriteColorId: id })
                              }
                              options={this.colorOptions}
                            />
                          </FormField>
                        </Col>
                      </Row>
                      <Row>
                        <Col span={6}>
                          <FormField>
                            <Checkbox
                              dataHook="terms-checkbox"
                              checked={this.state.termsChecked}
                              onChange={() =>
                                this.setState({
                                  termsChecked: !this.state.termsChecked,
                                })
                              }
                            >
                              I agree for the terms of use
                            </Checkbox>
                          </FormField>
                        </Col>
                        <Col span={6}>
                          <Box align="right">
                            <Box marginRight="12px">
                              {this.renderClearButton()}
                            </Box>
                            {this.renderSubmitButton()}
                          </Box>
                        </Col>
                      </Row>
                    </Card.Content>
                  </Card>
                </Col>
                <Col span={4}>
                  <Row>
                    <Card>
                      <Card.Header title="Extra" />
                      <Card.Divider />
                      <Card.Content>
                        <FormField label="Fun fact">
                          <InputArea
                            dataHook="fun-fact-input"
                            placeholder="Enter something interesting"
                            value={this.state.funFact}
                            onChange={(e) =>
                              this.setState({ funFact: e.target.value })
                            }
                          />
                        </FormField>
                      </Card.Content>
                    </Card>
                  </Row>
                  <Row>{this.renderSubmittedInfo()}</Row>
                </Col>
              </Row>
            </Container>
          </Page.Content>
        </Page>
      </>
    );
  }
}

export default App;
