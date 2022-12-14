'use babel';

import Threejs3dPortfolioAtomPackage1 from '../lib/threejs-3d-portfolio-atom-package1';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('Threejs3dPortfolioAtomPackage1', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('threejs-3d-portfolio-atom-package1');
  });

  describe('when the threejs-3d-portfolio-atom-package1:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.threejs-3d-portfolio-atom-package1')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'threejs-3d-portfolio-atom-package1:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.threejs-3d-portfolio-atom-package1')).toExist();

        let threejs3dPortfolioAtomPackage1Element = workspaceElement.querySelector('.threejs-3d-portfolio-atom-package1');
        expect(threejs3dPortfolioAtomPackage1Element).toExist();

        let threejs3dPortfolioAtomPackage1Panel = atom.workspace.panelForItem(threejs3dPortfolioAtomPackage1Element);
        expect(threejs3dPortfolioAtomPackage1Panel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'threejs-3d-portfolio-atom-package1:toggle');
        expect(threejs3dPortfolioAtomPackage1Panel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.threejs-3d-portfolio-atom-package1')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'threejs-3d-portfolio-atom-package1:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let threejs3dPortfolioAtomPackage1Element = workspaceElement.querySelector('.threejs-3d-portfolio-atom-package1');
        expect(threejs3dPortfolioAtomPackage1Element).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'threejs-3d-portfolio-atom-package1:toggle');
        expect(threejs3dPortfolioAtomPackage1Element).not.toBeVisible();
      });
    });
  });
});
