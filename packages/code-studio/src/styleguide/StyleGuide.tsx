/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Flex } from '@adobe/react-spectrum';
import { ContextMenuRoot } from '@deephaven/components';

import Alerts from './Alerts';
import Buttons from './Buttons';
import Charts from './Charts';
import Colors from './Colors';
import ContextMenus from './ContextMenus';
import Dialog from './Dialog';
import DropdownMenus from './DropdownMenus';
import Editors from './Editors';
import Grids from './Grids';
import Icons from './Icons';
import Inputs from './Inputs';
import ItemListInputs from './ItemListInputs';
import Modals from './Modals';
import Progress from './Progress';
import TimeSliderInputs from './TimeSliderInputs';
import Tooltips from './Tooltips';
import Typograpy from './Typography';
import './StyleGuide.scss';
import DraggableLists from './DraggableLists';
import Navigations from './Navigations';
import ThemeColors from './ThemeColors';
import SpectrumComponents from './SpectrumComponents';
import SamplesMenu, { SampleMenuCategory } from './SamplesMenu';
import GotoTopButton from './GotoTopButton';

const stickyProps = {
  position: 'sticky',
  justifyContent: 'end',
  zIndex: 1,
} as const;

function StyleGuide(): React.ReactElement {
  return (
    <div className="container style-guide-container">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginTop="2rem"
        marginBottom="1rem"
      >
        <h1 style={{ paddingTop: '2rem' }}>Deephaven UI Components</h1>
      </Flex>

      <Flex {...stickyProps} marginTop={-56} top={20}>
        <SamplesMenu />
      </Flex>
      <Flex {...stickyProps} top="calc(100vh - 40px)" marginTop={-32}>
        <GotoTopButton />
      </Flex>

      <Typograpy />

      <SampleMenuCategory data-menu-category="Colors" />
      <Colors />
      <ThemeColors />

      <SampleMenuCategory data-menu-category="Components" />
      <Buttons />
      <Progress />
      <Alerts />
      <Inputs />
      <ItemListInputs />
      <DraggableLists />
      <TimeSliderInputs />
      <Dialog />
      <Modals />
      <ContextMenus />
      <DropdownMenus />
      <Navigations />
      <Tooltips />
      <Icons />
      <Editors />
      <Grids />
      <Charts />
      <ContextMenuRoot />

      <SampleMenuCategory data-menu-category="Spectrum Components" />
      <SpectrumComponents />
    </div>
  );
}

export default StyleGuide;
