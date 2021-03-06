import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { Article, Content, Layout, Section, Collapsed } from '../../components'

import mapImage from '../../images/map.png'

import aboutData from '../../data/about.yml'
import teamData from '../../data/team.yml'

const AboutPage = () => (
  <Layout container>
    <Article nav tag="main">
      <h1>{aboutData.title}</h1>

      <Section id="our-mission" caption="Our mission" tag="div">
        <Row>
          <Col xs="12" sm="6" md="7" lg="9" tag="section">
            <h2>{aboutData.mission.title}</h2>
            <Content markdown>{aboutData.mission.short}</Content>

            <Collapsed id="full-mission" title={aboutData.mission.full.caption}>
              <Content markdown>{aboutData.mission.full.content}</Content>
            </Collapsed>
          </Col>

          <Col
            xs="12"
            sm="6"
            md="5"
            lg="3"
            className="mt-3 mt-sm-0"
            tag="aside"
          >
            <h4>{aboutData.blog.title}</h4>
            <Content markdown>{aboutData.blog.content}</Content>
            <div className="text-center">
              <Button color="primary" outline>
                Visit the blog
              </Button>
            </div>
          </Col>
        </Row>
      </Section>

      <Section id="how-it-works" caption="How it works">
        <h2>{aboutData.howitworks.title}</h2>
        <Section>
          <h3>{aboutData.howitworks.harvesting.title}</h3>
          <Row>
            <Col xs="12" md="6">
              <Content markdown>
                {aboutData.howitworks.harvesting.content}
              </Content>
            </Col>

            <Col xs="12" md="6">
              <img src={mapImage} alt="Map" className="w-100 m-auto" />
            </Col>
          </Row>

          <Row className="align-items-center mt-3">
            <Col xs="6" className="text-right">
              <a href="https://www.google.com/">
                See the full list of data providers
              </a>
            </Col>

            <Col xs="6">
              <Button color="primary" outline>
                Become a data provider
              </Button>
            </Col>
          </Row>
        </Section>

        <Section>
          <Row>
            <Col md="9">
              <h3>{aboutData.howitworks.services.title}</h3>
              <Content markdown>
                {aboutData.howitworks.services.content}
              </Content>

              <Row className="align-items-center mt-3">
                <Col xs="6" className="text-right">
                  <a className="btn btn-link" href="https://www.google.com/">
                    Explore our services
                  </a>
                </Col>

                <Col xs="6">
                  <Button color="primary">Join CORE today for free</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Section>
      </Section>

      <Section id="contact" caption="Contact us">
        <Row>
          <Col md="9">
            <h2>{aboutData.contacts.title}</h2>
            <Row>
              <Col xs="6">
                <Button color="primary" className="btn-send" outline>
                  &nbsp; Send us a message
                </Button>
              </Col>
            </Row>
            <Row>
              <Col md="4" className="font-weight-bold">
                {aboutData.contacts.address.caption}
              </Col>

              <Col md="8">
                <address>
                  {aboutData.contacts.address.name}
                  <br />
                  {aboutData.contacts.address.org}
                  <br />
                  {aboutData.contacts.address.city}
                  <br />
                  {aboutData.contacts.address.country}
                </address>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>

      <Section id="resources" caption="Resources">
        <Row>
          <Col md="9">
            <h2>{aboutData.resources.title}</h2>
            <Collapsed
              id="promotion-materials"
              title={aboutData.resources.promotionmaterials.title}
            >
              <Content markdown>
                {aboutData.resources.promotionmaterials.content}
              </Content>
            </Collapsed>
            <Collapsed
              id="researchoutputs"
              title={aboutData.resources.researchoutputs.title}
            >
              <Content markdown>
                {aboutData.resources.researchoutputs.content}
              </Content>
            </Collapsed>
          </Col>
        </Row>
      </Section>

      <Section id="team" caption="The team">
        <Row>
          <Col md="9">
            <h2>{teamData.title}</h2>
            <Collapsed
              id="current-members"
              title="Current members of the CORE team"
              open
            >
              {teamData.members.map(({ name, job }) => (
                <p key={`${name}, ${job}`}>
                  {name}, {job}
                </p>
              ))}
            </Collapsed>
            <Collapsed id="past-members" title="Past members of the CORE team">
              {teamData.pastMembers.map(({ name, job }) => (
                <p key={`${name}, ${job}`}>
                  {name}, {job}
                </p>
              ))}
            </Collapsed>
          </Col>
        </Row>
      </Section>
    </Article>
  </Layout>
)

export default AboutPage
