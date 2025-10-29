# Contributing to Dalarnia Legends Fan Site

Thank you for your interest in contributing! This is a community-driven project, and we welcome contributions from everyone.

## Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Enhance UI/UX
- 🔧 Fix issues
- ✨ Add new features
- 🌐 Add translations (future)

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dalarnia-fansite.git
   cd dalarnia-fansite
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and test them
5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request** on GitHub

## Development Guidelines

### Code Style

**Python (Backend):**
- Follow PEP 8 style guide
- Use type hints where applicable
- Write docstrings for functions
- Keep functions focused and small

Example:
```python
async def get_legend(legend_id: int) -> Legend:
    """
    Get a specific legend by ID.
    
    Args:
        legend_id: The ID of the legend to retrieve
        
    Returns:
        Legend object if found
        
    Raises:
        HTTPException: If legend not found
    """
    # implementation
```

**JavaScript/React (Frontend):**
- Use functional components
- Follow React hooks best practices
- Use meaningful variable names
- Keep components small and focused
- Use CSS modules or styled components

Example:
```jsx
// Good
function LegendCard({ legend }) {
  const [isSelected, setIsSelected] = useState(false)
  
  return (
    <div className="legend-card">
      <h3>{legend.name}</h3>
    </div>
  )
}

// Avoid
function LC({ l }) {
  // unclear names, avoid abbreviations
}
```

### Git Commit Messages

Use clear, descriptive commit messages:

- **Add**: Adding new features
- **Fix**: Bug fixes
- **Update**: Updating existing features
- **Remove**: Removing code or files
- **Refactor**: Code refactoring
- **Style**: Formatting, CSS changes
- **Docs**: Documentation changes

Examples:
```
Add: Legends filtering by element type
Fix: Deck builder not saving selected legends
Update: Navigation menu mobile responsiveness
Docs: Add API endpoint documentation
```

### Testing

Before submitting:

**Backend:**
```bash
# Test the API manually
curl http://localhost:8000/api/health

# Or use the interactive docs
# http://localhost:8000/docs
```

**Frontend:**
```bash
# Run the dev server and test manually
npm run dev

# Check for console errors
# Test responsive design
```

### Branch Naming

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `style/` - UI/styling changes
- `refactor/` - Code refactoring

Examples:
- `feature/add-legend-search`
- `fix/deck-builder-validation`
- `docs/api-endpoints`
- `style/improve-mobile-nav`

## What to Work On

### Good First Issues

Look for issues labeled `good first issue`:
- Typo fixes
- Documentation improvements
- Simple UI enhancements
- Adding mock data

### Priority Areas

1. **Content**: Add more articles, legends, decks
2. **Features**: Search functionality, filters, sorting
3. **UI/UX**: Improve mobile experience, animations
4. **Performance**: Optimize loading, caching
5. **Accessibility**: ARIA labels, keyboard navigation

## Pull Request Process

1. **Update documentation** if needed
2. **Test your changes** thoroughly
3. **Update README** if adding features
4. **Reference issues** in PR description
5. **Respond to feedback** from reviewers
6. **Keep PR focused** - one feature per PR

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How to test the changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed the code
- [ ] Tested the changes
- [ ] Updated documentation
```

## Code Review

All submissions require review. We aim to:
- Provide constructive feedback
- Review within 2-3 days
- Merge approved PRs quickly

## Adding New Features

### Backend API Endpoints

1. Add model to `backend/models.py` if needed
2. Create or update router in `backend/routers/`
3. Add endpoint with proper error handling
4. Document in docstring
5. Update README with new endpoint

### Frontend Pages/Components

1. Create component in `src/pages/` or `src/components/`
2. Add corresponding CSS file
3. Update routing in `App.jsx`
4. Add navigation link
5. Test responsive design
6. Add loading and error states

## Database Integration (Future)

If adding database support:
1. Use SQLAlchemy ORM
2. Create migration scripts
3. Add database models
4. Update routers to use database
5. Provide seed data
6. Update documentation

## Styling Guidelines

- Use CSS variables from `index.css`
- Follow existing color scheme
- Maintain space-themed aesthetic
- Ensure mobile responsiveness
- Test on different screen sizes

## Security

- Never commit sensitive data
- Use environment variables for secrets
- Validate all user inputs
- Sanitize data before display
- Report security issues privately

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

## Questions?

- Open an issue for questions
- Join our Discord (link in README)
- Check existing issues and PRs

## Recognition

Contributors will be:
- Added to CONTRIBUTORS.md
- Mentioned in release notes
- Thanked in the community

Thank you for contributing to the Dalarnia Legends community! 🎮✨

