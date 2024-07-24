import React, { useState } from 'react';
import axios from 'axios';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecial, setIncludeSpecial] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/generate/', {
                length,
                include_uppercase: includeUppercase,
                include_lowercase: includeLowercase,
                include_numbers: includeNumbers,
                include_special: includeSpecial
            });
            setGeneratedPassword(response.data.generated_password);
        } catch (error) {
            console.error('Error generating password', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Password Generator</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col mb-4">
                    <label htmlFor="length" className="text-lg font-medium">Password Length:</label>
                    <input
                        type="number"
                        id="length"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        min="1"
                        className="mt-1 p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-lg font-medium">Include:</label>
                    <div className="flex flex-col space-y-2">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeUppercase}
                                onChange={(e) => setIncludeUppercase(e.target.checked)}
                                className="mr-2"
                            />
                            Uppercase Letters
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeLowercase}
                                onChange={(e) => setIncludeLowercase(e.target.checked)}
                                className="mr-2"
                            />
                            Lowercase Letters
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                                className="mr-2"
                            />
                            Numbers
                        </label>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={includeSpecial}
                                onChange={(e) => setIncludeSpecial(e.target.checked)}
                                className="mr-2"
                            />
                            Special Characters
                        </label>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Generate Password
                </button>
            </form>
            {generatedPassword && (
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold mb-2">Generated Password:</h2>
                    <p className="bg-gray-100 p-4 rounded text-lg">{generatedPassword}</p>
                    <button
                        onClick={() => navigator.clipboard.writeText(generatedPassword)}
                        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                    >
                        Copy to Clipboard
                    </button>
                </div>
            )}
        </div>
    );
};

export default PasswordGenerator;
