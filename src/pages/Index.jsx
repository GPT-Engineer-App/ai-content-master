import React from "react";
import { Box, Heading, Text, Button, Flex, Image, Container, SimpleGrid, Icon, Link } from "@chakra-ui/react";
import { FaRocket, FaChartLine, FaImage, FaCode, FaBullseye, FaCloudUploadAlt } from "react-icons/fa";

const features = [
  {
    title: "AI-Driven Long-Form Content Generation",
    description: "Leverage advanced AI algorithms to generate high-quality, engaging long-form content effortlessly.",
    icon: FaRocket,
  },
  {
    title: "Dynamic Content Integration",
    description: "Seamlessly integrate relevant data, statistics, and external resources to enhance the depth and credibility of your content.",
    icon: FaChartLine,
  },
  {
    title: "SEO Optimization",
    description: "Optimize your content for search engines with intelligent keyword placement, meta tags, and structured data.",
    icon: FaBullseye,
  },
  {
    title: "Multimedia Content Creation",
    description: "Create visually appealing content by incorporating images, videos, infographics, and interactive elements.",
    icon: FaImage,
  },
  {
    title: "Intelligent Content Placement",
    description: "Automatically suggest the most effective placement for your content based on user engagement and conversion data.",
    icon: FaCode,
  },
  {
    title: "Direct Publishing Capabilities",
    description: "Publish your content directly to your website, blog, or social media channels with a single click.",
    icon: FaCloudUploadAlt,
  },
];

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Flex alignItems="center" justifyContent="space-between">
            <Box maxW="500px">
              <Heading as="h1" size="2xl" mb={4} fontFamily="heading">
                Revolutionize Your Content Strategy
              </Heading>
              <Text fontSize="xl" mb={8} fontFamily="body">
                Harness the power of AI to generate compelling long-form content, optimize for SEO, and publish effortlessly.
              </Text>
              <Button as={Link} to="/generate-content" colorScheme="blue" size="lg">
                Get Started
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1613633043968-e4ffc82d241b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRpb258ZW58MHx8fHwxNzEyMDI3MjkyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Content Creation" maxW="400px" />
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={12} fontFamily="heading">
            Key Features
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {features.map((feature, index) => (
              <Box key={index} bg="white" p={6} borderRadius="md" boxShadow="md">
                <Icon as={feature.icon} boxSize={12} color="blue.500" mb={4} />
                <Heading as="h3" size="lg" mb={2} fontFamily="heading">
                  {feature.title}
                </Heading>
                <Text fontFamily="body">{feature.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box bg="blue.500" py={20} color="white">
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="xl" mb={4} fontFamily="heading">
            Ready to Elevate Your Content Game?
          </Heading>
          <Text fontSize="xl" mb={8} fontFamily="body">
            Sign up now and experience the future of content creation.
          </Text>
          <Button colorScheme="white" size="lg" variant="outline">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Flex alignItems="center" justifyContent="space-between">
            <Text>&copy; 2023 Content Boost. All rights reserved.</Text>
            <Flex>
              <Link href="#" mr={4}>
                Privacy Policy
              </Link>
              <Link href="#">Terms of Service</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
