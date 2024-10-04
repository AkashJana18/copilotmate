"use client";
import React, { useState, useEffect } from "react";
import { TrashIcon, Edit3Icon } from "lucide-react";

interface Resource {
  id: number;
  name: string;
  note: string;
}

const StudyResources: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [newResource, setNewResource] = useState<string>("");
  const [newNote, setNewNote] = useState<string>(""); // For adding a note
  const [editingId, setEditingId] = useState<number | null>(null); // Track editing state for notes
  const [editingNote, setEditingNote] = useState<string>(""); // Track current editing note

  // Load resources from localStorage when component mounts
  useEffect(() => {
    const savedResources = localStorage.getItem("studyResources");
    if (savedResources) {
      setResources(JSON.parse(savedResources));
    }
  }, []);

  // Save resources to localStorage whenever resources array changes
  useEffect(() => {
    localStorage.setItem("studyResources", JSON.stringify(resources));
  }, [resources]);

  // Function to add a new resource with a note
  const addResource = () => {
    if (newResource.trim() !== "") {
      setResources([
        ...resources,
        { id: Date.now(), name: newResource, note: newNote },
      ]);
      setNewResource("");
      setNewNote(""); // Clear the note field after adding
    }
  };

  // Function to remove a resource
  const removeResource = (id: number) => {
    const updatedResources = resources.filter((resource) => resource.id !== id);
    setResources(updatedResources);
  };

  // Function to save an edited note
  const saveEditedNote = (id: number) => {
    const updatedResources = resources.map((resource) =>
      resource.id === id ? { ...resource, note: editingNote } : resource
    );
    setResources(updatedResources);
    setEditingId(null); // Exit edit mode
  };

  return (
    <div className="flex-1 p-6 backdrop-blur-lg bg-gradient-to-tr from-white/15 to-transparent border border-white/30 hover:border-white/50 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Study Resources</h2>

      <ul className="space-y-4">
        {resources.map((resource) => (
          <li
            key={resource.id}
            className="glass-card flex flex-col justify-between space-y-2 p-4 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-center">
              <span>{resource.name}</span>
              <div className="flex justify-center items-center gap-2">
                <button
                  className="p-1 text-purple-500 hover:text-white hover:bg-purple-700 rounded-lg"
                  onClick={() => {
                    setEditingId(resource.id);
                    setEditingNote(resource.note); // Initialize with existing note
                  }}
                >
                  <Edit3Icon />
                </button>
                <button
                  className="p-1 text-red-500 hover:text-white hover:bg-red-500 rounded-lg"
                  onClick={() => removeResource(resource.id)}
                >
                  <TrashIcon />
                </button>
              </div>
            </div>

            {/* Notes Section */}
            <div className="mt-2 text-sm">
              {editingId === resource.id ? (
                <div className="flex flex-col space-y-2">
                  <textarea
                    value={editingNote}
                    onChange={(e) => setEditingNote(e.target.value)}
                    className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-600"
                  />
                  <div className="flex space-x-4">
                    <button
                      onClick={() => saveEditedNote(resource.id)}
                      className="glow-btn px-4 py-2"
                    >
                      Save Note
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>{/* Show only title and Edit button */}</>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Add New Resource Section */}
      <div className="mt-6 flex flex-col  space-y-4">
        <input
          type="text"
          className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none"
          placeholder="Add new resource"
          value={newResource}
          onChange={(e) => setNewResource(e.target.value)}
        />
        <textarea
          className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:outline-none"
          placeholder="Add notes (optional)"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button className="glow-btn px-4 py-2 w-40" onClick={addResource}>
          Add Resource
        </button>
      </div>
    </div>
  );
};

export default StudyResources;
