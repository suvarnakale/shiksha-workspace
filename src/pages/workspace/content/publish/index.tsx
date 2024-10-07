import React, { useMemo, useState } from "react";
import Layout from "../../../../components/Layout";
import { Typography, Box } from "@mui/material";
import CourseCard from "../../../../components/CourseCard";
import SearchBox from "../../../../components/SearchBox";

const PublishData = [
  {
    title: "Home Science",
    description: "Learn about home science basics.",
    type: "Course",
    imageUrl: "",
    status: "published",
  },
  {
    title: "Test1",
    description: "Practice question set for Test1.",
    type: "Question Set",
    imageUrl: "",
    status: "published",
  },
  {
    title: "",
    description: "",
    type: "eBook",
    imageUrl: "",
    status: "published",
  },
];

const PublishPage = () => {
  const [selectedKey, setSelectedKey] = useState("publish");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("updated");

  const handleSearch = (search: string) => {
    setSearchTerm(search.toLowerCase());
  };

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const handleSortChange = (sortBy: string) => {
    setSortBy(sortBy);
  };

  const filteredData = useMemo(
    () =>
      PublishData.filter((content) =>
        content.title.toLowerCase().includes(searchTerm)
      ),
    [searchTerm]
  );

  const displayedCards = filteredData
    .slice
    // page * rowsPerPage,
    // page * rowsPerPage + rowsPerPage
    ();

  const handleDelete = (index: number) => {
    console.log(`Deleting item at index ${index}`);
  };

  return (
    <Layout selectedKey={selectedKey} onSelect={setSelectedKey}>
      <Box p={3}>
        <Typography variant="h4"> Content Publish</Typography>
        <Typography>Here you see all your Publish content.</Typography>

        <Box m={3}>
          <SearchBox
            placeholder="Search by title..."
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
          />
        </Box>

        <Box display="flex" flexWrap="wrap" gap={3} padding={2}>
          {displayedCards.map((content, index) => (
            <Box
              key={index}
              sx={{
                minWidth: "250px",
                maxWidth: "250px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CourseCard
                title={content.title || "Untitled Course"}
                description={
                  content.description || "Enter description of course"
                }
                type={content.type || "Course"}
                imageUrl={content.imageUrl}
                status={content.status}
                onDelete={() => handleDelete(index)}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default PublishPage;