import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ledstrip`, `driver`, `calculate`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <form>
      <p>
        <label>
          How long is your ledstrip: 
          <input type="numeric" name="length" />
        </label>
      </p>
      <p>
        <label>
          How many leds per meter:
          <input type="numeric" name="numberOfLeds" />
        </label>
      </p>
      <p>
        <label>
          Maximum power draw per led:
          <input type="numeric" name="maximumPowerDraw" />
        </label>
      </p>
      <input type="submit" value="Submit" />
    </form>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
